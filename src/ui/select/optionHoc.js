import React, { Component, createElement } from 'react'

export default WrappedComponent =>
  class OptionHoc extends Component {
    static displayName = `OptionHoc(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

    onMouseDown = (event) => {
      event.preventDefault()
      event.stopPropagation()

      this.props.onSelect(this.props.option, event)
    }

    onMouseEnter = (event) => {
      this.props.onFocus(this.props.option, event)
    }

    onMouseMove = (event) => {
      if (this.props.isFocused) {
        return
      }

      this.props.onFocus(this.props.option, event)
    }

    render() {
      const { className, option } = this.props

      return (
        <div
          className={className}
          onMouseDown={this.onMouseDown}
          onMouseEnter={this.onMouseEnter}
          onMouseMove={this.onMouseMove}
          title={option.title}
        >
          {createElement(WrappedComponent, this.props)}
        </div>
      )
    }
  }
