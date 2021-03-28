import { useState } from 'react'

export default function useLastName() {
  const [lastName, setLastName] = useState('')

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  return {
    lastName,
    handleLastName
  }
}
