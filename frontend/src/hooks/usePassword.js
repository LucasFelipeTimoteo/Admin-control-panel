import { useState } from 'react'

export default function usePassword() {
  const [password, setPassword] = useState('')
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return {
    password,
    handlePassword
  }
}
