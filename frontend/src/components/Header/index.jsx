import React from 'react'
import { useStatusFilter } from '../../contexts/statusFilter'
import ActivitySelector from '../../parts/ActivitySelector'
import AddUserButton from '../../parts/AddUserButton'

export default function Header() {
  const {userActivity, handleUserActivity} = useStatusFilter()

  return (
    <div style={{ backgroundColor: 'purple', height: 35, display: 'flex', justifyContent: 'space-around' }}>
      <ActivitySelector
        userActivity={userActivity}
        handleUserActivity={handleUserActivity}
      />

      <AddUserButton />
    </div>
  )
}
