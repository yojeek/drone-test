import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

class Content extends Component {
  state = {
    style: {
      borderTop: '1px solid transparent',
      borderBottom: '1px solid transparent',
    },
  }

  componentDidUpdate(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.onScroll()
    }
  }

  onScroll = () => {
    if (!this.element) {
      return
    }

    const { disable } = this.props
    const heightDiff = this.element.getScrollHeight() - this.element.getClientHeight()
    const { scrollTop } = this.element.container.childNodes[0]

    const style = {}

    if (scrollTop > 0 && disable !== 'top') {
      style.borderTop = '1px solid #dcdfe8'
    }

    if (heightDiff > 0 && heightDiff > scrollTop && disable !== 'bottom') {
      style.borderBottom = '1px solid #dcdfe8'
    }

    this.setState({ style })
  }

  onSetRef = (element) => {
    this.element = element
    this.onScroll()
  }

  render() {
    const { children } = this.props
    const { style } = this.state

    return (
      <Scrollbars
        style={style}
        ref={this.onSetRef}
        onScroll={this.onScroll}
      >
        {children}
      </Scrollbars>
    )
  }
}

export default Content
