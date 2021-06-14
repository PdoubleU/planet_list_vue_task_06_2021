function parseDate (date) {
  if (!date) return
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const [month, day, year] = new Date(date).toLocaleDateString('en-US').split('/')

  const parsedDate = day + ' ' + months[parseInt(month) - 1] + ' ' + year

  return parsedDate
}

export default parseDate
