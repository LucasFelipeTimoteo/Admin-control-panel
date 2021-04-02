import React, { useEffect } from 'react'
import ToolBar from '../../components/ToolBar'
import UsersList from '../../components/UsersList'
import useCurrentUsersList from '../../hooks/useCurrentUsersList'
import useSearchFilter from '../../hooks/useSearchFilter'
import useStatusFilter from '../../hooks/useStatusFilter'
import useUsers from '../../hooks/useUsers'
import ActivitySelector from '../../parts/ActivitySelector'
import AddUserButton from '../../parts/AddUserButton'
import SearchFilter from '../../parts/SearchFilter'
import api from '../../services/api'

export default function Home() {
  const users = useUsers()
  const { statusFilter, handleStatusFilter } = useStatusFilter()
  const { searchFilter, handleSearchFilter } = useSearchFilter()

  const { currentUsersList, toggleStatusAction } = useCurrentUsersList(users, statusFilter, searchFilter)

  const deleteUser = async (userId) => {
    try {
      await api.delete(`/users/${userId}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ToolBar>
        <AddUserButton />
        <ActivitySelector
          statusFilter={statusFilter}
          handleStatusFilter={handleStatusFilter}
        />
        <SearchFilter
          searchFilter={searchFilter}
          handleSearchFilter={handleSearchFilter}
        />
      </ToolBar>

      <UsersList
        currentUsersList={currentUsersList}
        toggleStatusAction={toggleStatusAction}
        deleteUser={deleteUser}
      />
    </>
  )
}
