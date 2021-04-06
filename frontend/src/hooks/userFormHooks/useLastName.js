import { useState } from 'react'

export default function useLastName() {
  const [lastName, setLastName] = useState('')

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEditUserDataLastName = (editUserDataUsername) => {
    setLastName(editUserDataUsername)
  }

  return {
    lastName,
    handleLastName,
    handleEditUserDataLastName
  }
}
