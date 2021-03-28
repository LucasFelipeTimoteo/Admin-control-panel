import { useState } from 'react'

export default function useExpireDate() {
  const [expireDate, setExpireDate] = useState('')

  const handleExpireDate = (e) => {
    setExpireDate(e.target.value)
  }

  return {
    expireDate,
    handleExpireDate
  }
}
