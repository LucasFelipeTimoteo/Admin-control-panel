import { useState } from 'react'

export default function useFirstName() {
  const storageFirstname = sessionStorage.getItem('__USERFORM__firstName')

  const [firstName, setFirstName] = useState(storageFirstname || '')
  
  const handleFirstName = (e) => {
    sessionStorage.setItem('__USERFORM__firstName', e.target.value)
    setFirstName(e.target.value)
  }

  const handleEditUserDataFirstName = (editUserDataUsername) => {
    setFirstName(editUserDataUsername)
  }

  return {
    firstName,
    handleFirstName,
    handleEditUserDataFirstName
  }
}
