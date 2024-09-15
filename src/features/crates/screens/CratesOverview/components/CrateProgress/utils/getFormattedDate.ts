export const getFormattedDate = (date: string) => {
  const dateObj = new Date(date)
  const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()
  const day = dateObj.getDate()
  return `${month} ${day}`
}
