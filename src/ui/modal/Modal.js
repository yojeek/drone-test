import React from 'react'
import { withPortal } from '../portal'
import Backdrop from './Backdrop'
import Body from './Body'

const Modal = ({ children, width, height, fill }) => (
  <Backdrop>
    <Body
      fill={fill}
      width={width}
      height={height}
    >
      {children}
    </Body>
  </Backdrop>
)

export default withPortal(Modal)
