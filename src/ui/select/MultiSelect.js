import React from 'react'
import Select from './Select'
import Value from './Value'
import MultiOption from './MultiOption'

const pluralize = (n, one, few, many) =>{
  const d = parseInt(n.toString().substr(-1))

  if (n > 10 && n < 20) {
    return many
  } else if (d == 1) {
    return one
  } else if (d >= 2 && d <= 4) {
    return few
  }

  return many
}

class MultiSelect extends Select {
  static defaultProps = {
    ...Select.defaultProps,
    simpleValue: false,
    multi: true,
    optionComponent: MultiOption,
    pluralLabels: ['значение', 'значения', 'значений'],
  }

  renderValue(values = []) {
    const value = values.length > 3
      ? `Выбрано ${values.length} ${pluralize(values.length, ...this.props.pluralLabels)}`
      : values.map(({ label }) => label).join(', ')

    return (
      <Value>
        {value}
      </Value>
    )
  }
}

export default MultiSelect
