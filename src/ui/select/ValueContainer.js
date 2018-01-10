import React from 'react'
import { StyleSheet } from 'elementum'
import { Text } from '../text'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const ValueContainer = ({ children, onMouseDown }) => (
  <div
    className={styles()}
    onMouseDown={onMouseDown}
  >
    {children}
  </div>
)

export default ValueContainer
