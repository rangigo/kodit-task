import React, { Component } from 'react'
import FormOne from '../components/FormOne'
import FormTwo from '../components/FormTwo'

export class FormContainer extends Component {
  state = {
    page: 1,
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  render() {
    const { page } = this.state

    return (
      <div className="form-container">
        <p className="form-header">
          Get Kodit.io price valuation and request an offer
        </p>
        <p className="form-header-comment">* mandatory fields to be filled</p>
        {page === 1 && <FormOne onSubmit={this.nextPage} />}
        {page === 2 && <FormTwo onSubmit={this.props.handleSubmit} />}
      </div>
    )
  }
}

export default FormContainer
