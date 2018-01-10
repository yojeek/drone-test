import React from 'react'
import Icon from './Icon'
import { rotate } from './utils/index'

const ArrowIcon = ({ right, top, left, ...props }) => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <g transform={rotate({
      right,
      top,
      left
    }, 24, 24)}>
      <path d='M67.5 275.5l188.5 -188.5l188.5 188.5l23 -23l-200 -200l-11.5 -11l-11.5 11l-200 200z' />
    </g>
  </Icon>
)

export default ArrowIcon
