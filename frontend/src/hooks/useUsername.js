import { useState } from 'react'

export default function useUsername() {
  const [username, setUsername] = useState('')
  
  const handleUsername = (e) => {
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
