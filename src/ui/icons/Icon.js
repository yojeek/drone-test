import React from 'react'

const getSize = (width, height, ratio) => {
  if (!width && !height) {
    return {
      width: 24,
      height: 24
    }
  }
  if (width && height) {
    return {
      width,
      height
    }
  }

  return {
    ...width && {
      width,
      height: (width / ratio)
    },
    ...height && {
      width: (height * ratio),
      height
    },
  }
}

const getViewBox = (viewBox, originalWidth, originalHeight) =>
  viewBox || `0 0 ${originalWidth} ${originalHeight}`

const Icon = ({
                originalWidth, originalHeight, width, height,
                fill = '#ffffff', children, viewBox, pointer, ...props
              }) => (
  <svg
    {...props}
    fill={fill}
    viewBox={getViewBox(viewBox, originalWidth, originalHeight)}
    {...getSize(width, height, originalWidth / originalHeight)}
    style={{
      display: 'flex',
      cursor: pointer ? 'pointer' : null
    }}
  >
    {children}
  </svg>
)

export default Icon
