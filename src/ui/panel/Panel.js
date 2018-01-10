import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 1px 0 rgba(23, 43, 77, 0.25)',
    overflow: 'hidden',
  },
})

const Panel = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Panel
