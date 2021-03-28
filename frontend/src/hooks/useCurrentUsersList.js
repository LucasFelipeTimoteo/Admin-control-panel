import { useEffect, useState } from "react"

export default function useCurrentUsersList(users, userActivity) {
  const [currentUsersList, setCurrentUsersList] = useState(users)

  useEffect(() => {
    const currentUsers = users.filter(user => (
      userActivity ? user.status === userActivity : true
    ))
  
    setCurrentUsersList(currentUsers)
  }, [userActivity, users])

  return currentUsersList
}
