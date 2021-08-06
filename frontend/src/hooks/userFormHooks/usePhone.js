import { useState } from 'react'

export default function usePhone() {
  const storagePhone= sessionStorage.getItem('__USERFORM__Phone')

  const [phone, setPhone] = useState(storagePhone || '')
  
  const handlePhone = (e) => {
    sessionStorage.setItem('__USERFORM__Phone', e.target.value)
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
