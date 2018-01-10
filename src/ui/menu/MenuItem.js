import { createElement } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '14px',
    color: '#868aa8',
    fontFamily: 'Roboto',
    textDecoration: 'none',
    padding: '9px 30px',
    width: '100%',
    boxSizing: 'border-box',
    lineHeight: 1,
    cursor: 'pointer',
    '&:hover': {
      background: '#292b3a',
    },
  },
})

const MenuItem = ({ children, to, ...props }) =>
  createElement(
    to ? Link : 'a',
    {
      ...props,
      to,
      styles,
    },
    children,
  )

export default MenuItem
