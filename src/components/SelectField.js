import React from 'react'

const SelectField = ({
  children,
  meta: { error, touched, active },
  input: { ...input },
}) => {
  return (
    <>
      <select className="form-control" id="city_field" {...input}>
        {children}
      </select>
      <div className="red-text">{touched && error}</div>
    </>
  )
}

export default SelectField
