import { useState } from "react"

export default function useStatus() {
  const storageStatus = sessionStorage.getItem('__USERFORM__status')

  const [status, setStatus] = useState(storageStatus || 'active')

  const handleStatus = (e) => {
    sessionStorage.setItem('__USERFORM__status', e.target.value)
    setStatus(e.target.value)
  }

  const handleEditUserDataStatus = (editUserDataUsername) => {
    setStatus(editUserDataUsername)
  }

  return {
    status,
    handleStatus,
    handleEditUserDataStatus
  }
}