import { useState } from 'react'

export default function usePhone() {
  const [phone, setPhone] = useState('')
  
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleEditUserDataPhone = (editUserDataUsername) => {
    setPhone(editUserDataUsername)
  }

  return {
    phone,
    handlePhone,
    handleEditUserDataPhone
  }
}
