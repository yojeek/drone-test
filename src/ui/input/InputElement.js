import { Component, createElement } from 'react'
import MaskedInput from 'react-maskedinput'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    border: 'solid 1px #ebedf2',
    fontFamily: 'sans-serif, Arial',
    color: '#575962',
    appearance: 'none',
    outline: 'none',
    borderRadius: '3.5px',
    lineHeight: 1.25,
    fontSize: '14px',
    '&:focus': {
      border: 'solid 1px #716aca',
    },
  },
  'size=normal': {
    fontSize: '14px',
    padding: '9px 17.5px',
  },
  'offsetLeft=normal': {
    paddingLeft: '8px',
  },
  'offsetRight=normal': {
    paddingRight: '8px',
  },
  'attach=right': {
    borderRadius: '4px 0px 0px 4px',
  },
  'attach=left': {
    borderRadius: '0px 4px 4px 0px',
    borderLeftColor: 'transparent',
  },
  invalid: {
    borderColor: '#fc3d52',
  },
  disabled: {
    color: '#7b7e8a',
    borderColor: '#f7f8fa',
    backgroundColor: '#f7f8fa',
  },
})

class InputElement extends Component {
  onChange = (event) => {
    const { originalEvents, onChange } = this.props

    if (onChange) {
      onChange(originalEvents ? event : event.target.value)
    }
  }

  onKeyPress = (event) => {
    const { onEnter, onKeyPress } = this.props

    if (event.key === 'Enter' && onEnter) {
      onEnter()
    }

    if (onKeyPress) {
      onKeyPress(event)
    }
  }

  onSetRef = (input) => {
    this.input = input
  }

  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  render() {
    const {
      mask, attach, focus, size, invalid,
      offsetLeft, offsetRight, originalEvents, ...props
    } = this.props

    return createElement(
      mask ? MaskedInput : 'input',
      {
        ...props,
        mask,
        ref: this.onSetRef,
        className: styles({
          attach,
          focus,
          size,
          invalid,
          offsetLeft: offsetLeft ? size : null,
          offsetRight: offsetRight ? size : null,
        }),
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
      },
    )
  }
}

export default InputElement
