import { Component, createElement } from 'react'

export default WrappedComponent =>
  class WithHover extends Component {
    static displayName = `WithHover(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

    state = {
      hover: false,
    }

    onMouseEnter = () => {
      this.setState({ hover: true })
    }

    onMouseLeave = () => {
      this.setState({ hover: false })
    }

    render() {
      return createElement(WrappedComponent, {
        ...this.props,
        ...this.state,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
      })
    }
  }
