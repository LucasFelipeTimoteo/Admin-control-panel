import { useState } from 'react'

export default function useProfile() {
  const [profile, setProfile] = useState('driver')

  const handleProfile = (e) => {
    setProfile(e.target.value)
  }

  return {
    profile, 
    handleProfile
  }
}
