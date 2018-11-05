import React from 'react'
import { Field, reduxForm } from 'redux-form'

import InputField from './InputField'
import SelectField from './SelectField'
import RadioField from './RadioField'
import validate from '../utils/validate'

const FormOne = ({ handleSubmit, invalid }) => {
  return (
    <form id="form1" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>
            Floor
            <sup>*</sup>
          </label>
          <div
            style={{
              display: 'block',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            <Field name="floor" component={SelectField}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9+</option>
            </Field>
          </div>
        </div>
        <div className="form-group">
          <label>
            Total floors
            <sup>*</sup>
          </label>
          <div
            style={{
              display: 'block',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            <Field name="totalFloors" component={SelectField}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9+</option>
            </Field>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="area">
            Living area size
            <sup>*</sup>
          </label>
          <Field
            name="area"
            component={InputField}
            type="text"
            placeholder="71.5"
          />
        </div>
        <div className="form-group">
          <label>
            Number of rooms
            <sup>*</sup>
          </label>
          <div
            style={{
              display: 'block',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            <Field name="rooms" component={SelectField}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9+</option>
            </Field>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="constructionYear">
            Construction year
            <sup>*</sup>
          </label>
          <Field
            name="constructionYear"
            component={InputField}
            type="text"
            placeholder="1978"
          />
        </div>
        <div className="form-group">
          <label htmlFor="maintainCost">
            Maintenance cost (€/mk)
            <sup>*</sup>
          </label>
          <Field
            name="maintainCost"
            component={InputField}
            type="text"
            placeholder="300"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="radio-group-label">Land ownership</div>
        <div className="form-group radio-btn-group">
          <Field
            name="ownership"
            component={RadioField}
            type="radio"
            value="own"
            label="Own"
            checked
          />
          <Field
            name="ownership"
            component={RadioField}
            type="radio"
            value="rented"
            label="Rented"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="radio-group-label">
          Is there an elevator in the building
        </div>
        <div className="form-group radio-btn-group">
          <Field
            name="elevator"
            component={RadioField}
            type="radio"
            value="yes"
            label="Yes"
          />
          <Field
            name="elevator"
            component={RadioField}
            type="radio"
            value="no"
            label="No"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="radio-group-label">
          Is there an bacony in the apartment
        </div>
        <div className="form-group radio-btn-group">
          <Field
            name="bacony"
            component={RadioField}
            type="radio"
            value="yes"
            label="Yes"
          />
          <Field
            name="bacony"
            component={RadioField}
            type="radio"
            value="no"
            label="No"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="radio-group-label">
          Is there pipe renovation planned within 5 years
        </div>
        <div className="form-group radio-btn-group">
          <Field
            name="pipeRenovate"
            component={RadioField}
            type="radio"
            value="yes"
            label="Yes"
          />
          <Field
            name="pipeRenovate"
            component={RadioField}
            type="radio"
            value="no"
            label="No"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="radio-group-label">
          Is there facade renovation planned within 10 years
        </div>
        <div className="form-group radio-btn-group">
          <Field
            name="facadeRenovate"
            component={RadioField}
            type="radio"
            value="yes"
            label="Yes"
          />
          <Field
            name="facadeRenovate"
            component={RadioField}
            type="radio"
            value="no"
            label="No"
          />
        </div>
      </div>
      <div className="button-container">
        <button type="submit" className="valuation-button" disabled={invalid}>
          Get price valuation
        </button>
        <div className="small-message-warning">
          By continuing you accept the general terms of use of Kodit.io and
          confirm that you have read the privacy policy. In addition you give
          permission for Kodit.io or their representive to contact you by email,
          phone or text message, via the contact information you provide, for
          marketing purposes.
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  validate,
  form: 'evaluate',
  initialValues: {
    ownership: 'own',
    elevator: 'no',
    bacony: 'no',
    pipeRenovate: 'no',
    facadeRenovate: 'no',
  },
  destroyOnUnmount: false,
})(FormOne)
