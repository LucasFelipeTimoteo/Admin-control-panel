import { useState } from 'react'

export default function useMobilePhone() {
  const [mobilePhone, setMobilePhone] = useState('')
  
  const handleMobilePhone = (e) => {
    setMobilePhone(e.target.value)
  }

  const handleEditUserDataMobilePhone = (editUserDataUsername) => {
    setMobilePhone(editUserDataUsername)
  }

  return {
    mobilePhone,
    handleMobilePhone,
    handleEditUserDataMobilePhone
  }
}
