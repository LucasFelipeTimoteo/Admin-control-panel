import { useState } from 'react'

export default function useCompany() {
  const [company, setCompany] = useState('company1')

  const handleCompany = (e) => {
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
