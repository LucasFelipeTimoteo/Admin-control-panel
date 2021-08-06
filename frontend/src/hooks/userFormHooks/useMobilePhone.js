import { useState } from 'react'

export default function useMobilePhone() {
  const storageMobilePhone = sessionStorage.getItem('__USERFORM__MobilePhone')

  const [mobilePhone, setMobilePhone] = useState(storageMobilePhone || '')
  
  const handleMobilePhone = (e) => {
    sessionStorage.setItem('__USERFORM__MobilePhone', e.target.value)
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
