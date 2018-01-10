import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    visibility: 'visible',
    opacity: 1,
    transition: 'all 400ms',
    zIndex: 10,
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
})

const Container = ({ hidden, children }) => (
  <div className={styles({ hidden })}>
    {children}
  </div>
)

export default Container
