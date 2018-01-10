export function If({ children, condition }) {
  if (condition) {
    return children
  }

  return null
}
