import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
})

const Block = ({ children }) => (
  <div className={styles}>
    {children}
  </div>
)

export default Block
