import React from 'react'
import { StyleSheet } from 'elementum'
import { Text } from '../text'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexShrink: 1,
    flexBasis: '100%',
    paddingLeft: '11px',
    boxSizing: 'border-box',
    minWidth: '0px',
    '& span': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'initial',
    },
  },
})

const Value = ({ children }) => (
  <div className={styles()}>
    <Text>
      {children}
    </Text>
  </div>
)

export default Value
