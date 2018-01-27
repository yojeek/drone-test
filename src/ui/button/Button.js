import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 0,
    borderWidth: '1px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: '14px',
    transition: 'all .4s ease-in-out',
  },
  fill: {
    width: '100%',
  },
  'size=normal': {
    padding: '9px 17.5px',
  },
  'size=small': {
    padding: '8px 15px',
    lineHeight: '1.5',
  },
  'color=primary': {
    color: '#ffffff',
    background: '#ffa800',
    borderColor: '#ffa800',
    '&:hover': {
      boxShadow: '0px 2px 4px 0px rgba(255,168,0,1)',
    },
  },
  'color=secondary': {
    color: '#ffffff',
    background: '#8390ad',
    borderColor: '#8390ad',
    '&:hover': {
      boxShadow: '0px 2px 4px 0px rgba(131,144,173,1)',
    },
  },
  'color=outline-primary': {
    color: '#8390ad',
    background: 'transparent',
    borderColor: '#ffa800',
    '&:hover': {
      color: '#ffffff',
      background: '#ffa800',
      boxShadow: '0px 2px 4px 0px rgba(255,168,0,1)',
    },
  },
  'color=outline-secondary': {
    color: '#8390ad',
    background: 'transparent',
    borderColor: '#8390ad',
    '&:hover': {
      color: '#ffffff',
      background: '#8390ad',
      boxShadow: '0px 2px 4px 0px rgba(131,144,173,1)',
    },
  },
  disabled: {
    opacity: 0.3,
  },
})

const Button = ({children, fill, color = 'primary', size = 'normal', disabled, onClick}) => (
  <button
    disabled={ disabled }
    className={ styles({
      fill,
      color,
      size
    }) }
    onClick={ onClick }
  >
    { children }
  </button>
)

export default Button
