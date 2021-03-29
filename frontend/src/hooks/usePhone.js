import { useState } from 'react'

export default function usePhone() {
  const [phone, setPhone] = useState('')
  
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  return {
    phone,
    handlePhone
  }
}
