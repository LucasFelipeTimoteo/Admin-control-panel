import { useState } from 'react'

export default function useUsername() {
  const [username, setUsername] = useState('')
  
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  return {
    username,
    handleUsername
  }
}
