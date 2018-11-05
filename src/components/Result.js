import React from 'react'
import Chart from '../containers/Chart'

const Result = ({ result, relatedResults }) => {
  return (
    <div className="result-feedback">
      <div className="feedback-row">
        <div
          className="feedback-col "
          style={{
            fontSize: '18px',
            letterSpacing: '0.125rem',
            color: '#4C4C4C',
            fontWeight: 700,
          }}
        >
          <p style={{ margin: '0', padding: '10px' }}>
            Kodit.io Price valuation
          </p>
        </div>
        <div className="feedback-col">
          <div className="valuation-group">
            <p className="valuation">
              {result
                ? Number.parseInt(
                    result.price_sqm * result.size_sqm
                  ).toLocaleString()
                : 2}
            </p>
            <span className="append-unit">€</span>
          </div>
        </div>
      </div>
      <Chart relatedResults={relatedResults} />
    </div>
  )
}

export default Result
