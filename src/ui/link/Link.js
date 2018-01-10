import { createElement } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '14px',
    color: '#716aca',
    fontFamily: 'Roboto',
    textDecoration: 'none',
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    transition: 'all .15s ease-in-out',
    '&:hover': {
      color: '#5f57c3',
      borderBottom: '1px solid #5f57c3',
    },
  },
})

const Link = ({ children, to, ...props }) =>
  createElement(
    to ? RouteLink : 'a',
    {
      ...props,
      to,
      styles,
    },
    children,
  )

export default Link
