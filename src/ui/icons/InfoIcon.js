import React from 'react'
import Icon from './Icon'

const InfoIcon = props => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <g>
      <path
        d='M256 400c114.686 0 208 -93.3145 208 -208s-93.3145 -208 -208 -208s-208 93.3145 -208 208s93.3145 208 208
          208zM256 368c-97.3916 0 -176 -78.6084 -176 -176s78.6084 -176 176 -176s176 78.6084 176 176s-78.6084 176 -176
          176zM240 288h32v-32h-32v32zM240 224h32 v-128h-32v128z'
      />
    </g>
  </Icon>
)

export default InfoIcon
