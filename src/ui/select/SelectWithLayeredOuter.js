import React, { cloneElement } from 'react'
import Select from 'react-select'
import { StyleSheet } from 'elementum'
import 'react-select/dist/react-select.css'
import { Layer } from '../layer'

const styles = StyleSheet.create({
  self: {
    borderRadius: '4px',
    backgroundColor: '#2b354f',
    boxShadow: '0 8px 10px 0 rgba(0, 0, 0, 0.32)',
    margin: '6px 0px',
    padding: '4px 0',
    borderWidth: '0px',
    width: 'auto',
    minWidth: '100%',
    whiteSpace: 'nowrap',
    '& .Select-option': {
      background: 'transparent',
      fontFamily: '"Lato", sans-serif',
      color: '#f6f6ff',
      paddingRight: '25px',
      fontSize: '14px',
      '&.is-focused': {
        background: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
})

class SelectWithLayeredOuter extends Select {
  renderOuter(...args) {
    if (!this.control) {
      return null
    }

    const { width: minWidth } = this.control.getBoundingClientRect()
    const outer = super.renderOuter(...args)

    const target = cloneElement(
      outer,
      {
        style: { ...outer.style, minWidth },
        className: outer.className ? `${outer.className} ${styles()}` : styles(),
      },
    )

    return (
      <Layer constraints={[{ to: 'scrollParent', attachment: 'together' }]}>
        {target}
      </Layer>
    )
  }
}

export default SelectWithLayeredOuter
