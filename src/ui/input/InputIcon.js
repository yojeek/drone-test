import { cloneElement } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  'align=left': {
    left: '12px',
  },
  'align=right': {
    right: '6px',
  },
  disabled: {
    opacity: 0.3,
  },
})

const InputIcon = ({ icon, align = 'left', disabled }) => {
  if (!icon) {
    return null
  }

  return cloneElement(icon, {
    className: styles({ disabled, align }),
  })
}

export default InputIcon
