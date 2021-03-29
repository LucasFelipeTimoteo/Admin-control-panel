import React from 'react'

import UsersList from '../../components/UsersList'

import useCurrentUsersList from '../../hooks/useCurrentUsersList'
import useUsers from '../../hooks/useUsers'

import { useStatusFilter } from '../../contexts/statusFilter'

export default function Home() {
  const users = useUsers()
  const { userActivity } = useStatusFilter()

  const currentUsersList = useCurrentUsersList(users, userActivity)

  return (
    <>
      <UsersList
        currentUsersList={currentUsersList}
      />
    </>
  )
}
