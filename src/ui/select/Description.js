import React from 'react'
import { StyleSheet } from 'elementum'
import { Text } from '../text'

const styles = StyleSheet.create({
  self: {
    paddingLeft: '6px',
    display: 'flex',
    flexShrink: 0,
  },
})

const Description = ({ children }) => (
  <div className={styles()}>
    <Text>
      {children}
    </Text>
  </div>
)

export default Description
