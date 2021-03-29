export default function getFormatedCurrentDate() {
  const year = new Date().getFullYear()

  const month = (new Date().getMonth() + 1).toString()
  const formatedMonth = month[1] ? month : `0${month}`

  const day = new Date().getDate().toString()
  const formatedDay = day[1] ? day : `0${day}`

  const formatedCurrentDate = `${year}-${formatedMonth}-${formatedDay}`

  return formatedCurrentDate
}
