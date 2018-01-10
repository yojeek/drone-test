import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000000',
  },
})

const Backdrop = ({ children, onClose }) => (
  <div
    className={styles()}
    onClick={onClose}
  >
    {children}
  </div>
)

export default Backdrop
