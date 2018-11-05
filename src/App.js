import React, { Component } from 'react'

import FormContainer from './containers/FormContainer'
import './App.scss'
import ResultContainer from './components/ResultContainer'
import '../node_modules/react-vis/dist/style.css'

class App extends Component {
  state = {
    data: null,
    result: null,
    relatedResults: [],
    submitted: false,
    loading: false,
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            who_rules: 'kodit.io',
          }),
        }
      )
      const data = await res.json()
      this.setState({ data })
    } catch (err) {
      console.log(err)
    }
  }

  handleSubmit = values => {
    // const values = {
    //   address: 'Kuhatie 10',
    //   area: 75,
    //   constructionYear: 1977,
    // }
    this.setState({ loading: true, submitted: true })
    setTimeout(() => {
      const splitAddress = values.address.split(' ')
      const relatedResults = this.state.data.filter(
        el => splitAddress[0] === el.street
      )

      const tempFinalResults = relatedResults.filter(
        el => el.street_number === +splitAddress[1]
      )

      try {
        const closestArea = tempFinalResults.reduce(
          (prev, curr) =>
            Math.abs(curr.size_sqm - +values.area) <
            Math.abs(prev.size_sqm - +values.area)
              ? curr
              : prev
        ).size_sqm

        const closestYear = tempFinalResults
          .filter(el => el.size_sqm === closestArea)
          .reduce(
            (prev, curr) =>
              Math.abs(curr.built_year - +values.constructionYear) <
              Math.abs(prev.built_year - +values.constructionYear)
                ? curr
                : prev
          ).built_year

        const result = tempFinalResults.find(
          el => el.built_year === closestYear && el.size_sqm === closestArea
        )

        this.setState({
          relatedResults,
          result,
          loading: false,
        })
      } catch (err) {
        console.log(err)
        this.setState({ loading: false })
      }
    }, 2000)
  }

  render() {
    return (
      <div className="app">
        <div className="app-container">
          <img
            src="https://kodit.io/assets/images/logo.svg"
            alt="logo"
            className="logo"
            onClick={() => (window.location.href = '/')}
          />
          <FormContainer handleSubmit={this.handleSubmit} />
          <ResultContainer
            data={this.state.result}
            submitted={this.state.submitted}
            result={this.state.result}
            relatedResults={this.state.relatedResults}
            loading={this.state.loading}
          />
        </div>
      </div>
    )
  }
}

export default App
