import { useEffect, useState } from "react"
import arraySort from 'array-sort'

export default function useCurrentUsersList(
  users,
  statusFilter,
  searchFilter,
  orderBy
) {
  const [currentUsersList, setCurrentUsersList] = useState(users)

  useEffect(() => {

    const usersFilteredByStatus = users.filter(user => (
      statusFilter ? user.status === statusFilter : true
    ))

    const usersFilteredByOrder = () => {
      if (orderBy === 'ascendent') {
        const usersFilteredByAscendentOrder = arraySort(
          usersFilteredByStatus,
          'firstName'
        )

        return usersFilteredByAscendentOrder
      }

      if (orderBy === 'descendent') {
        const usersFilteredByDescendent = arraySort(
          usersFilteredByStatus,
          'firstName',
          { reverse: true }
        )

        return usersFilteredByDescendent
      }

      return usersFilteredByStatus
    }

    const filteredUsers = usersFilteredByOrder().filter(user => {
      const search = searchFilter.toLowerCase()

      const filterByFirstName = user.firstName.toLowerCase().includes(search)
      const filterByLastName = user.lastName.toLowerCase().includes(search)
      const filterByUserName = user.username.toLowerCase().includes(search)
      const filterByProfile = user.profile.toLowerCase().includes(search)

      return filterByFirstName || filterByLastName || filterByUserName || filterByProfile
    })

    setCurrentUsersList(filteredUsers)
  }, [statusFilter, users, searchFilter, orderBy])

  return {
    currentUsersList,
  }
}
