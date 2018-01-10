import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    height: '3px',
    backgroundImage: 'linear-gradient(to right, #27aae1, #0082ff)',
    boxShadow: '0 1px 2px rgba(0,0,0,0.5)',
    transition: 'all 200ms ease',
  },
})

const Line = ({ progress = 0 }) => (
  <div
    className={styles()}
    style={{ width: `${progress}%` }}
  />
)

export default Line
