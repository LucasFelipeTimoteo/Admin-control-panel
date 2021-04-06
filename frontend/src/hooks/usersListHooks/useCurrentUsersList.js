import { useEffect, useState } from "react"

export default function useCurrentUsersList(users, statusFilter, searchFilter) {
  const [currentUsersList, setCurrentUsersList] = useState(users)

  useEffect(() => {

    const usersFilteredByStatus = users.filter(user => (
      statusFilter ? user.status === statusFilter : true
    ))

    const filteredUsers = usersFilteredByStatus.filter(user => {
      const search = searchFilter.toLowerCase()
      
      const filterByFirstName = user.firstName.toLowerCase().includes(search)
      const filterByLastName = user.lastName.toLowerCase().includes(search)
      const filterByUserName = user.username.toLowerCase().includes(search)
      const filterByProfile = user.profile.toLowerCase().includes(search)

      return filterByFirstName || filterByLastName || filterByUserName || filterByProfile
    })
  
    setCurrentUsersList(filteredUsers)
  }, [statusFilter, users, searchFilter])

  return {
    currentUsersList,
    
  }
}
