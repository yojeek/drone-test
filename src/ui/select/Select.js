import React from 'react'
import { StyleSheet } from 'elementum'
import SelectWithLayeredOuter from './SelectWithLayeredOuter'
import Option from './Option'
import Arrow from './Arrow'
import Value from './Value'
import Description from './Description'
import ValueContainer from './ValueContainer'
import { Input } from '../input'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    position: 'relative',
    '& input': {
      cursor: 'pointer',
    },
  },
  disabled: {
    '& input': {
      cursor: 'initial',
    },
  },
})

class Select extends SelectWithLayeredOuter {
  static defaultProps = {
    ...SelectWithLayeredOuter.defaultProps,
    simpleValue: true,
    clearable: false,
    optionComponent: Option,
  }

  onSetRef = (element) => {
    if (element) {
      this.wrapper = element.input.input.parentNode.parentNode
      this.control = element.input.input.parentNode
      this.input = element.input
    }
  }

  onToggleOverlay = (event) => {
    if (!this.props.disabled) {
      if (!this.state.isOpen) {
        this.input.focus()

        this.setState({
          isOpen: true,
        })
      }

      event.stopPropagation()
      event.preventDefault()

      if (this.state.isOpen) {
        this.closeMenu()
      }
    }
  }

  renderInput(valueArray, focusedOptionIndex) {
    const isOpen = !!this.state.isOpen

    const inputProps = {
      readOnly: true,
      nav: this.props.nav,
      attach: this.props.attach,
      invalid: this.props.invalid,
      tabIndex: this.props.tabIndex,
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      required: this.state.required,
      ref: this.onSetRef,
    }

    return (
      <Input
        id={this.props.id}
        {...inputProps}
      />
    )
  }

  renderValueContainer(values) {
    return (
      <ValueContainer onMouseDown={this.onToggleOverlay}>
        {this.renderValue(values)}
        {this.renderDescription(values)}
        {this.renderArrow()}
      </ValueContainer>
    )
  }

  renderValue([value] = []) {
    return (
      <Value>
        {value && value.label || null}
      </Value>
    )
  }

  renderDescription([value] = []) {
    const { hideValueDescription } = this.props

    if (!(value && value.description) || hideValueDescription) {
      return null
    }

    return (
      <Description>
        {value && value.description}
      </Description>
    )
  }

  renderArrow() {
    const { nav } = this.props
    const { isOpen } = this.state

    return (
      <Arrow
        nav={nav}
        isOpen={isOpen}
      />
    )
  }

  render() {
    const { width, value } = this.props

    const valueArray = this.getValueArray(value)
    const options = this._visibleOptions = this.props.options || []
    const isOpen = this.state.isOpen

    const focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0])

    let focusedOption = null
    if (focusedOptionIndex !== null) {
      focusedOption = this._focusedOption = options[focusedOptionIndex]
    } else {
      focusedOption = this._focusedOption = null
    }

    return (
      <div
        style={{ width }}
        className={styles()}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
        onTouchEnd={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        {this.renderInput(valueArray, focusedOptionIndex)}
        {this.renderValueContainer(valueArray)}
        {isOpen ? this.renderOuter(options, valueArray, focusedOption) : null}
      </div>
    )
  }
}

export default Select
