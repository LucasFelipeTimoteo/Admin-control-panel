import React from 'react'

import ToolBar from '../../components/ToolBar'
import UsersList from '../../components/UsersList'

import ActivitySelector from '../../parts/ActivitySelector'
import AddUserButton from '../../parts/AddUserButton'
import SearchFilter from '../../parts/SearchFilter'

import useCurrentUsersList from '../../hooks/usersListHooks/useCurrentUsersList'
import useSearchFilter from '../../hooks/usersListHooks/useSearchFilter'
import useStatusFilter from '../../hooks/usersListHooks/useStatusFilter'
import useUsers from '../../hooks/apiHooks/useUsers'

export default function AdminPanel() {
  const { users, deleteUser, toggleStatusAction } = useUsers()
  const { statusFilter, handleStatusFilter } = useStatusFilter()
  const { searchFilter, handleSearchFilter } = useSearchFilter()

  const { currentUsersList } = useCurrentUsersList(users, statusFilter, searchFilter)

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
