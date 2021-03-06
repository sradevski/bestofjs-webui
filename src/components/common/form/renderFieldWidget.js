import React from 'react'
import FieldRow from './FieldRow'

const renderFieldWidget = Component => ({ input, label, type, meta: { touched, error } }) => {
  return (
    <FieldRow
      label={label}
      showError={touched && error}
      errorMessage={error}
    >
      <Component field={input} />
    </FieldRow>
  )
}
export default renderFieldWidget
