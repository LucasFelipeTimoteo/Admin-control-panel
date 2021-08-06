import { useState } from 'react'

export default function useEmail() {
  const storageEmail = sessionStorage.getItem('__USERFORM__email')

  const [email, setEmail] = useState(storageEmail || '')
  
  const handleEmail = (e) => {
    sessionStorage.setItem('__USERFORM__email', e.target.value)
    setEmail(e.target.value)
  }

  const handleEditUserDataEmail = (editUserDataUsername) => {
    setEmail(editUserDataUsername)
  }

  return {
    email,
    handleEmail,
    handleEditUserDataEmail
  }
}
