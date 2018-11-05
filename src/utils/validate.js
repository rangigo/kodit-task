const validate = values => {
  const errors = {}

  if (!values.city) {
    errors.city = 'Required'
  }

  if (!values.address) {
    errors.address = 'Please enter the address'
  } else if (!/^[a-zA-Z0-9- ]+[0-9]+$/.test(values.address)) {
    errors.address = 'Please enter a valid address'
  }

  if (!values.postCode) {
    errors.postCode = 'Please enter a valid post code'
  } else if (!/^[0-9]{5}$/.test(values.postCode)) {
    errors.postCode = 'Please enter a valid post code'
  }

  if (!values.area) {
    errors.area = 'Please enter the living area size'
  } else if (!/^[0-9]+(\.[0-9]+)?$/.test(values.area)) {
    errors.area = 'Please enter valid area size (numbers only)'
  }

  if (!values.constructionYear) {
    errors.constructionYear = 'Please enter the construction year'
  } else if (!/^[0-9]+$/.test(values.constructionYear)) {
    errors.constructionYear = 'Please enter valid construction year (numbers only)'
  }

  if (!values.maintainCost) {
    errors.maintainCost = 'Please enter the maintainence cost'
  } else if (!/^[0-9]+$/.test(values.maintainCost)) {
    errors.maintainCost = 'Please enter valid maintainence cost (numbers only)'
  }

  return errors
}
export default validate
