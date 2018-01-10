/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import InputElement from './InputElement'
import InputIcon from './InputIcon'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    overflow: 'hidden',
    boxSizing: 'content-box',
    position: 'relative',
  },
})

class Input extends Component {
  static defaultProps = {
    icon: null,
    size: 'normal',
  }

  state = {
    showPassword: false,
  }

  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  onSetInputRef = (input) => {
    this.input = input
  }

  renderElement() {
    const { icon, type, invalid, onEnter, ...props } = this.props
    const { showPassword } = this.state

    return (
      <InputElement
        {...props}
        ref={this.onSetInputRef}
        invalid={invalid && true}
        offsetLeft={icon !== null}
        offsetRight={type === 'password' || icon !== null}
        type={type === 'password' && showPassword ? null : type}
      />
    )
  }

  renderIcon() {
    const { icon, disabled } = this.props

    return (
      <InputIcon
        align='left'
        icon={icon}
        disabled={disabled}
      />
    )
  }

  render() {
    const { width } = this.props

    return (
      <div
        style={{ width }}
        className={styles()}
      >
        {this.renderElement()}
        {this.renderIcon()}
      </div>
    )
  }
}

export default Input
