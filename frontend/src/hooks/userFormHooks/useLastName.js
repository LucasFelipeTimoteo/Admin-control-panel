import { useState } from 'react'

export default function useLastName() {
  const storageLastName = sessionStorage.getItem('__USERFORM__lastName')

  const [lastName, setLastName] = useState(storageLastName || '')
  
  const handleLastName = (e) => {
    sessionStorage.setItem('__USERFORM__lastName', e.target.value)
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
