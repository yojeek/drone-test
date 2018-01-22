import React, { Component } from 'react'

class Select extends Component {
  componentDidMount() {
    $(this.element).selectpicker()

    if (this.props.value) {
      $(this.element).selectpicker('val', this.props.value)
    }

    setTimeout(() => {
      $(this.element).selectpicker()
    }, 5000)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      $(this.element).selectpicker('val', nextProps.value)
    }
  }

  componentDidUpdate() {
    $(this.element).selectpicker('refresh')
  }

  onSetRef = (element) => {
    this.element = element
  }

  render() {
    return (
      <select
        ref={this.onSetRef}
        {...this.props}
      />
    )
  }
}

export default Select
