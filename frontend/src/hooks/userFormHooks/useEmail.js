import { useState } from 'react'

export default function useEmail() {
  const [email, setEmail] = useState('')

  const handleEmail = (e) => {
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
