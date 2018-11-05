import React from 'react'

const RadioField = ({ type, label, input: { ...input } }) => {
  return (
    <label className={`radio-btn ${input.checked ? 'radio-active' : ''}`}>
      {label}
      <input type={type} {...input} />
    </label>
  )
}

export default RadioField
