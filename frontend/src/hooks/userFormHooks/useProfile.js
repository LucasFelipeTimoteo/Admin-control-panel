import { useState } from 'react'

export default function useProfile() {
  const storageProfile = sessionStorage.getItem('__USERFORM__profile')

  const [profile, setProfile] = useState(storageProfile || 'driver')
  
  const handleProfile = (e) => {
    sessionStorage.setItem('__USERFORM__profile', e.target.value)
    setProfile(e.target.value)
  }

  const handleEditUserDataProfile = (editUserDataUsername) => {
    setProfile(editUserDataUsername)
  }

  return {
    profile, 
    handleProfile,
    handleEditUserDataProfile
  }
}
