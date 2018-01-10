import React, { Component, Children, cloneElement } from 'react'

class Upload extends Component {
  onClick = () => {
    this.element.click()
  }

  onChange = ({ target }) => {
    if (this.props.onUpload && target.files.length > 0) {
      this.props.onUpload(target.files.item(0))
    }
  }

  onSetRef = (element) => {
    this.element = element
  }

  renderChildren() {
    return cloneElement(Children.only(this.props.children), { key: 'children', onClick: this.onClick })
  }

  render () {
    return [
      this.renderChildren(),
      <input
        key='input'
        type='file'
        multiple={false}
        ref={this.onSetRef}
        style={{ display: 'none' }}
        accept='image/x-png,image/jpeg'
        onChange={this.onChange}
      />,
    ]
  }
}

export default Upload
