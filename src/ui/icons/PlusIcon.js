import React from 'react'
import Icon from './Icon'

const PlusIcon = props => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <g>
      <path
        d='M240 368h32v-160h160v-32h-160v-160h-32v160h-160v32h160v160z'
      />
    </g>
  </Icon>
)

export default PlusIcon
