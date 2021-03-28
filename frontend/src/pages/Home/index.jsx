import React from 'react'

import UsersList from '../../components/UsersList'

import useCurrentUsersList from '../../hooks/useCurrentUsersList'
import useUsers from '../../hooks/useUsers'

import { useUserActivity } from '../../contexts/userActivity'

export default function Home() {
  const users = useUsers()
  const { userActivity } = useUserActivity()

  const currentUsersList = useCurrentUsersList(users, userActivity)

  return (
    <>
      <UsersList
        currentUsersList={currentUsersList}
      />
    </>
  )
}
