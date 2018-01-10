import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    boxShadow: '0 0 15px 1px rgba(113,106,202,.2)',
    borderRadius: '4px',
    maxHeight: 'calc(100% - 80px)',
    overflow: 'hidden',
  },
  fill: {
    height: 'calc(100% - 80px)',
  },
})

const Body = ({ children, width, height, fill }) => (
  <div
    className={styles({ fill })}
    style={{ width, height }}
  >
    {children}
  </div>
)

export default Body
