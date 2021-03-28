import { useState } from 'react'

export default function useFirstName() {
  const [firstName, setFirstName] = useState('')
  
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  return {
    firstName,
    handleFirstName
  }
}
