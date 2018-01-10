import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '100%',
    height: '100%',
    borderRadius: '3px',
    background: '#64b5f6',
  },
})

const Selection = ({ children }) => (
  <div className={styles}>
    {children}
  </div>
)

export default Selection
