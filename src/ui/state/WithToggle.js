import { Component, createElement } from 'react'

export default WrappedComponent =>
  class WithToggle extends Component {
    static displayName = `WithToggle(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

    state = {
      toggle: false,
    }

    onToggle = () => {
      this.setState({ toggle: !this.state.toggle })
    }

    render() {
      return createElement(WrappedComponent, {
        ...this.props,
        ...this.state,
        onToggle: this.onToggle,
      })
    }
  }
