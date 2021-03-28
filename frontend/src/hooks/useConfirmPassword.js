import { useState } from 'react'

export default function useConfirmPassword() {
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  return {
    confirmPassword,
    handleConfirmPassword
  }
}
