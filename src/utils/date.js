
const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

// первый или второй день
const getDayNumber = () => {
  const date = new Date()
  const day = date.getDate()
  return day % 2 === 0 ? 2 : 1
}

const getDay = () => {
  const date = new Date()
  return date.getDate()
}

const getMonth = () => {
  const date = new Date()
  return date.getMonth() + 1
}

const getMonthText = () => {
  const month = getMonth()
  return months[month]
}

const getYear = () => {
  const date = new Date();
  return date.getYear() + 1900
}

const getDate = () => {
  const day = getDay()
  const month = getMonth()
  const year = getYear()
  return `${day}.${month}.${year}`
}

const getDateYesterday = () => {
  const day = getDay() - 1
  const month = getMonth()
  const year = getYear()
  return `${day}.${month}.${year}`
}

const parsDate = (date) => {
  const dateArray = date.split('.')
  return dateArray
}



export { getDay, getDayNumber, getDateYesterday, getMonth, getMonthText, getYear, getDate, parsDate }