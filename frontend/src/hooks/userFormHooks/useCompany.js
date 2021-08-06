import { useState } from 'react'

export default function useCompany() {
  const storageCompany = sessionStorage.getItem('__USERFORM__company')

  const [company, setCompany] = useState(storageCompany || 'company1')
  
  const handleCompany = (e) => {
    sessionStorage.setItem('__USERFORM__company', e.target.value)
    setCompany(e.target.value)
  }

  const handleEditUserDataCompany = (editUserDataUsername) => {
    setCompany(editUserDataUsername)
  }

  return {
    company,
    handleCompany,
    handleEditUserDataCompany
  }
}
