import { useState } from 'react'

export default function useUsername() {
  const storageUsername = sessionStorage.getItem('__USERFORM__username')

  const [username, setUsername] = useState(storageUsername || '')
  
  const handleUsername = (e) => {
    sessionStorage.setItem('__USERFORM__username', e.target.value)
    setUsername(e.target.value)
  }

  const handleEditUserDataUsername = (editUserDataUsername) => {
    setUsername(editUserDataUsername)
  }

  return {
    username,
    handleUsername,
    handleEditUserDataUsername
  }
}
