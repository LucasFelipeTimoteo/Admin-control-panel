import { useState } from 'react'
import getFormatedCurrentDate from '../utils/getFormatedCurrentDate'

export default function useExpireDate() {
  const formatedCurrentDate = getFormatedCurrentDate()

  const [expireDate, setExpireDate] = useState(formatedCurrentDate)

  const handleExpireDate = (e) => {
    setExpireDate(e.target.value)
  }

  const resetExpireDate = () => {
    setExpireDate('')
  }

  return {
    expireDate,
    handleExpireDate,
    resetExpireDate
  }
}
