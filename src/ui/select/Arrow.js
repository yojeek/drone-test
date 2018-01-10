import React from 'react'
import { StyleSheet } from 'elementum'
import { KeyboardArrowIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    paddingRight: '6px',
    paddingLeft: '6px',
    display: 'flex',
    '& svg': {
      position: 'relative',
      top: '1px',
    },
  },
})

const Arrow = ({ nav, isOpen }) => (
  <div className={styles()}>
    <KeyboardArrowIcon
      height={16}
      down={!isOpen}
      fill={nav ? 'rgba(246, 246, 255, 0.2)' : '#485974'}
    />
  </div>
)

export default Arrow
