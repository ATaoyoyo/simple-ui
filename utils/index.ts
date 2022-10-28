export function addUint(size?: string | number, defaultUnit = 'px') {
  if (!size) return ''
  if (typeof size === 'number') {
    return `${size}${defaultUnit}`
  } else {
    return size
  }
}
