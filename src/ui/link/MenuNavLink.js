import React from 'react'
import { NavLink } from 'react-router-dom'
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
    '&:hover': {
      background: '#292b3a',
    },
    '&:active': {
      color: '#716aca',
    },
  },
})

const MenuNavLink = props => (
  <NavLink
    {...props}
    className={styles()}
  />
)

export default MenuNavLink
