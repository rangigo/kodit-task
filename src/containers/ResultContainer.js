import React, { Component } from 'react'
import Result from '../components/Result'

export class ResultContainer extends Component {
  render() {
    const { submitted, result, relatedResults } = this.props

    return (
      <div className="result-container">
        {!submitted && (
          <p
            style={{
              color: '#4C4C4C',
              fontSize: '16px',
              letterSpacing: '0.125rem',
            }}
          >
            Currently we operate in Helsinki, Espoo, Vantaa, Kauniainen, Turku,
            Tampere and Tallinn focusing on apartments valued under 500 000€.
            You can get the price valuation of your home and ask for free of
            charge home inspection by filling the form.
          </p>
        )}
        {submitted ? (
          result ? (
            <Result result={result} relatedResults={relatedResults} />
          ) : (
            <p
              style={{
                color: 'rgba(255, 0, 44, 0.824)',
                fontWeight: '700',
                fontSize: '1.5em',
              }}
            >
              Something is wrong please re-submit the form. (valid street number
              & address from the dataset!)
            </p>
          )
        ) : null}
      </div>
    )
  }
}

export default ResultContainer
