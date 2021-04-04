import { useState } from 'react'

export default function useProfile() {
  const [profile, setProfile] = useState('driver')

  const handleProfile = (e) => {
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
