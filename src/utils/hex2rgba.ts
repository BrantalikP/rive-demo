export const hex2rgba = (hex: string, alpha = 1): string => {
  if (alpha > 1 || alpha < 0) {
    throw new Error('alpha is not correct!')
  }

  const red = parseInt(hex.slice(1, 3), 16)
  const green = parseInt(hex.slice(3, 5), 16)
  const blue = parseInt(hex.slice(5, 7), 16)

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}
