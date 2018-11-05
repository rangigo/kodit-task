import React, { Component } from 'react'
import { Sunburst, DiscreteColorLegend, LabelSeries } from 'react-vis'

const ITEMS = [
  { title: 'Year', color: '#4BCCD5' },
  { title: 'Area (m²)', color: '#353D99' },
  { title: 'Price per m²', color: '#369298' },
]

const LABEL_STYLE = {
  fontSize: '15px',
  textAnchor: 'middle',
}

function groupBy(list, keyGetter) {
  const map = new Map()
  list.forEach(item => {
    const key = keyGetter(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })
  return map
}

function updateData(data, keyPath) {
  if (data.children) {
    data.children.map(child => updateData(child, keyPath))
  }
  // add a fill to all the uncolored cells
  if (!data.color) {
    data.style = {
      fill: '#F15C17',
    }
  }
  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.title] ? 0.2 : 1,
  }

  return data
}

function getKeyPath(node) {
  if (!node.parent) {
    return [`Street: ${node.data.title}`]
  }

  return [(node.data && node.data.title) || node.title].concat(
    getKeyPath(node.parent)
  )
}

export class Chart extends Component {
  state = {
    clicked: false,
    pathValue: false,
    finalValue: `Street: ${this.props.relatedResults[0].street}`,
    data: {},
    decoratedData: {},
  }

  componentDidMount() {
    const { relatedResults } = this.props
    // Map data to tree structure for displaying chart
    const groupByYear = groupBy(relatedResults, res => res.built_year)
    let data = {
      title: relatedResults[0].street,
      children: [],
    }
    let i = 0
    for (const entry of groupByYear.entries()) {
      data.children.push({
        title: `Year: ${entry[0]}`,
        children: [],
        color: '#4BCCD5',
      })
      const groupByArea = groupBy(entry[1], res => res.size_sqm)
      for (const entryTwo of groupByArea.entries()) {
        data.children[i].children.push({
          title: `Area: ${entryTwo[0]}m²`,
          children: entryTwo[1].map(el => ({
            title: `Price per m²: ${Number(el.price_sqm).toFixed(2)}€`,
            size: Number(el.price_sqm).toFixed(2),
            color: '#369298',
          })),
          color: '#353D99',
        })
      }
      i++
    }
    this.setState({ data, decoratedData: updateData(data, false) })
  }

  render() {
    const { clicked, data, decoratedData, finalValue, pathValue } = this.state
    const labels = pathValue.toString().split(' > ')
    return (
      <div className="feedback-chart">
        <h3
          style={{
            fontSize: '18px',
            letterSpacing: '0.125rem',
            color: '#4C4C4C',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Sunburst chart showing prices of other apartments from the same street
        </h3>
        <p className="chart-tip">Click to lock selection</p>
        <Sunburst
          hideRootNode
          height={400}
          width={400}
          data={data}
          getSize={d => d.size}
          getColor={d => d.color}
          onValueMouseOver={node => {
            if (clicked) {
              return
            }
            const path = getKeyPath(node).reverse()
            const pathAsMap = path.reduce((res, row) => {
              res[row] = true
              return res
            }, {})
            this.setState({
              finalValue: path[path.length - 1],
              pathValue: path.join(' > '),
              data: updateData(decoratedData, pathAsMap),
            })
          }}
          onValueMouseOut={() =>
            clicked
              ? () => {}
              : this.setState({
                  pathValue: false,
                  finalValue: false,
                  data: updateData(decoratedData, false),
                })
          }
          onValueClick={() => this.setState({ clicked: !clicked })}
          style={{
            stroke: '#ddd',
            strokeOpacity: 0.8,
            strokeWidth: '.8',
          }}
          colorType="literal"
        >
          {finalValue && (
            <LabelSeries
              data={
                labels[0] !== 'false'
                  ? labels.map((el, i) => ({
                      x: 0,
                      y: (i - 2) * -33,
                      label: el,
                      style: LABEL_STYLE,
                    }))
                  : [
                      {
                        x: 0,
                        y: 0,
                        label: `Street: ${this.props.relatedResults[0].street}`,
                        style: LABEL_STYLE,
                      },
                    ]
              }
            />
          )}
        </Sunburst>
        <DiscreteColorLegend orientation="horizontal" items={ITEMS} />
      </div>
    )
  }
}

export default Chart
