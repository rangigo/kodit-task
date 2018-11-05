import React from 'react'
import { Field, reduxForm } from 'redux-form'

import InputField from './InputField'
import SelectField from './SelectField'
import validate from '../utils/validate'

const FormOne = ({ handleSubmit, invalid }) => {
  return (
    <form id="form1" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          City
          <sup>*</sup>
        </label>
        <div
          style={{
            display: 'block',
            position: 'relative',
            boxSizing: 'border-box',
          }}
        >
          <Field name="city" component={SelectField}>
            <option value="helsinki"> Helsinki</option>
            <option value="espoo"> Espoo</option>
            <option value="vantaa"> Vantaa</option>
            <option value="kaunianen"> Kauniainen</option>
            <option value="tampere"> Tampere</option>
            <option value="turku"> Turku</option>
            <option value="kaarina"> Kaarina</option>
            <option value="raisio"> Raisio</option>
            <option value="tallinn"> Tallinn</option>
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="address">
          Address
          <sup>*</sup>
        </label>
        <Field
          name="address"
          component={InputField}
          type="text"
          placeholder="Ajurinkatu 4"
        />
      </div>
      <div className="form-group">
        <label htmlFor="postCode">
          Post Code
          <sup>*</sup>
        </label>
        <Field
          name="postCode"
          component={InputField}
          type="text"
          placeholder="00420"
        />
      </div>
      <div className="form-group">
        <label htmlFor="url">
          If you have listed your apartment in a portal, please paste the URL
          here
        </label>
        <Field name="url" component={InputField} type="text" />
      </div>
      <div className="button-container">
        <button type="submit" className="valuation-button" disabled={invalid}>
          Next
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
  initialValues: { city: 'helsinki' },
  destroyOnUnmount: false,
})(FormOne)
