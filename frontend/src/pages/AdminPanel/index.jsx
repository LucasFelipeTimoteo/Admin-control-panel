import React from 'react'

import ToolBar from '../../components/ToolBar'
import UsersList from '../../components/UsersList'
import Header from '../../components/Header'

import ActivitySelector from '../../parts/ActivitySelector'
import AddUserButton from '../../parts/AddUserButton'
import SearchFilter from '../../parts/SearchFilter'

import useCurrentUsersList from '../../hooks/usersListHooks/useCurrentUsersList'
import useSearchFilter from '../../hooks/usersListHooks/useSearchFilter'
import useStatusFilter from '../../hooks/usersListHooks/useStatusFilter'
import useUsers from '../../hooks/apiHooks/useUsers'
import OrderUsers from '../../parts/OrderUsers'
import useOrderUsers from '../../hooks/usersListHooks/useOrderUsers'

import "./styles.css"

export default function AdminPanel() {
  const { users, deleteUser, toggleStatusAction } = useUsers()
  const { statusFilter, handleStatusFilter } = useStatusFilter()
  const { searchFilter, handleSearchFilter } = useSearchFilter()
  const { orderBy, handleOrderBy } = useOrderUsers()

  const { currentUsersList } = useCurrentUsersList(
    users,
    statusFilter,
    searchFilter,
    orderBy
  )

  return (
    <>
      <Header userList />
      <div className="admin-panel">
        <ToolBar>
          <AddUserButton />
          <ActivitySelector
            statusFilter={statusFilter}
            handleStatusFilter={handleStatusFilter}
          />
          <OrderUsers
            orderBy={orderBy}
            handleOrderBy={handleOrderBy}
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
      </div>
    </>
  )
}
