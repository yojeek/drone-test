import React, { Component } from 'react'

class Image extends Component {
  state = {
    src: null,
  }

  componentDidMount() {
    if (this.props.src) {
      this.readFile(this.props.src)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.readFile(nextProps.src)
    }
  }

  readFile(file) {
    if (file instanceof File) {
      const reader = new FileReader()
  
      reader.onload = (upload) => this.setState({ src: upload.target.result })
      reader.readAsDataURL(file)
    } else {
      this.setState({ src: file })
    }
  }

  render() {
    const { src } = this.state

    if (!src) {
      return null
    }

    return (
      <img
        {...this.props}
        src={src}
      />
    )
  }
}

export default Image
