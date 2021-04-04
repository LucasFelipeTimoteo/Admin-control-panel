import { useState } from "react"

export default function useStatus() {
  const [status, setStatus] = useState('active')
  
  const handleStatus = (e) => {
    console.log(e.target.value)
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
