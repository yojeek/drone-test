import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '100%',
    padding: '15px 20px',
    borderRadius: '4px',
    background: '#e91e63',
  },
})

const ErrorBlock = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default ErrorBlock
