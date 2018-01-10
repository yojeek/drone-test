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
    borderRadius: '3px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: '14px',
    transition: 'all .15s ease-in-out',
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
    background: '#384ad7',
    borderColor: '#2e40d4',
    '&:hover': {
      background: '#384ad7',
    },
  },
  'color=secondary': {
    color: '#111111',
    background: '#ffffff',
    borderColor: '#ebedf2',
    '&:hover': {
      background: '#f4f5f8',
    },
  },
  'color=danger': {
    color: '#ffffff',
    background: '#f4516c',
    borderColor: '#f4516c',
    '&:hover': {
      background: '#f22d4e',
      borderColor: '#f12143',
    },
  },
  'color=success': {
    color: '#ffffff',
    background: '#34bfa3',
    borderColor: '#34bfa3',
    '&:hover': {
      background: '#2ca189',
      borderColor: '#299781',
    },
  },
  'color=outline-primary': {
    color: '#5867dd',
    background: 'transparent',
    borderColor: '#5867dd',
    '&:hover': {
      color: '#ffffff',
      background: '#5867dd',
    },
  },
  'color=outline-danger': {
    color: '#f4516c',
    background: 'transparent',
    borderColor: '#f4516c',
    '&:hover': {
      color: '#ffffff',
      background: '#f4516c',
    },
  },
  disabled: {
    opacity: 0.3,
  },
})

const Button = ({ children, fill, color = 'primary', size = 'normal', disabled, onClick }) => (
  <button
    disabled={disabled}
    className={styles({ fill, color, size })}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
