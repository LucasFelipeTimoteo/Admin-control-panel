import { useState } from "react"

export default function useUserActivity() {
  const [userActivity, setUserActivity] = useState('')
  
  const handleUserActivity = (e) => {
    setUserActivity(e.target.value)
  }

  return {
    userActivity,
    handleUserActivity
  }
}
