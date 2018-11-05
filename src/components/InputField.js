import React from 'react'

const TextField = ({
  type,
  placeholder,
  input: { ...input },
  meta: { error, touched, active },
}) => {
  return (
    <>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...input}
      />
      <div className="red-text">{touched && error}</div>
    </>
  )
}

export default TextField
