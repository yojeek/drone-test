import React from 'react'
import Icon from './Icon'

const HistoryIcon = props => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <g>
      <path
        d='M256 384c105.848 0 192 -86.1523 192 -192s-86.1523 -192 -192 -192s-192 86.1523 -192 192h32c0 -88.5527 71.4473
         -160 160 -160s160 71.4473 160 160s-71.4473 160 -160 160c-59.2363 0 -110.35 -32.3125 -138
          -80h58v-32h-96h-16v16v96h32v-53.5 c34.4521 51.7129 93.3271 85.5 160 85.5zM240
           320h32v-112h80v-32h-96h-16v16v128z'
      />
    </g>
  </Icon>
)

export default HistoryIcon
