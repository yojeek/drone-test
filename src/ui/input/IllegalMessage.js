import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    fontFamily: '"Lato", sans-serif',
    fontSize: '12px',
    color: '#fc3d52',
    marginTop: '4px',
  },
  hidden: {
    display: 'none',
  },
})

const IllegalMessage = ({ children }) => (
  <div className={styles({ hidden: !children })}>
    {children}
  </div>
)

export default IllegalMessage
