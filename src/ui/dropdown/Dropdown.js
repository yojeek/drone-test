import React, { cloneElement } from 'react'
import { WithToggle } from '../state'
import { Layer } from '../layer'

const Dropdown = ({ children, trigger, toggle, onToggle, ...props }) => {
  const content = []

  if (typeof trigger === 'function') {
    content.push(
      cloneElement(
        trigger({ active: toggle, onClick: onToggle }),
        {
          key: 'dropdown-trigger',
        },
      ),
    )
  } else {
    content.push(
      cloneElement(
        trigger,
        {
          key: 'dropdown-trigger',
          active: toggle,
          onClick: onToggle,
        },
      ),
    )
  }

  if (toggle) {
    content.push(
      <Layer
        {...props}
        key='dropdown-menu'
        constraints={[{ to: 'scrollParent', attachment: 'together' }]}
        onOutsideClick={onToggle}
      >
        {children}
      </Layer>,
    )
  }

  return content
}

export default WithToggle(Dropdown)
