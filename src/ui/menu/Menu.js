import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#293246',
    boxShadow: '0 8px 10px 0 rgba(0, 0, 0, 0.32)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  offset: {
    padding: '4px 0',
  },
  margin: {
    margin: '8px 0',
  },
})

const Menu = ({ children, width, height, offset, margin }) => (
  <div
    className={styles({ offset, margin })}
    style={{ width, height }}
  >
    {children}
  </div>
)

export default Menu
