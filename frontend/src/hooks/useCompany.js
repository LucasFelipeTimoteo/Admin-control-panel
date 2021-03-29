import { useState } from 'react'

export default function useCompany() {
  const [company, setCompany] = useState('company1')

  const handleCompany = (e) => {
    setCompany(e.target.value)
  }

  return {
    company,
    handleCompany
  }
}
