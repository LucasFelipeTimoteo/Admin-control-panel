import React from 'react'

import { useEditUserData } from '../../contexts/editUserData'
import EditUserButton from '../../parts/EditUserButton'
import RemoveUserButton from '../../parts/RemoveUserButton'
import ToggleStatusButton from '../../parts/ToggleStatusButton'
import './styles.css'

export default function UsersList({
  currentUsersList,
  toggleStatusAction,
  deleteUser
}) {
  const { handleEditUserData } = useEditUserData()

  return (
    <>
      <table className="table">
        <thead className="table-header">
          <tr className="table-row-header">
            <td className="table-data">Name</td>
            <td className="table-data">Username</td>
            <td className="table-data">Profile</td>
            <td className="table-data">Status</td>
            <td className="table-data">Actions</td>
          </tr>
        </thead>

        <tbody>
          {
            currentUsersList.map(user => (
              <tr className="table-row" key={user.id}>
                <td className="table-data">{`${user.firstName} ${user.lastName}`}</td>
                <td className="table-data">{user.username}</td>
                <td className="table-data">{user.profile}</td>
                <td className="table-data">{user.status}</td>
                <td className="table-data">
                  <div className="actions-wrapper">
                    <EditUserButton
                      handleEditUserData={handleEditUserData}
                      user={user}
                    />
                    <ToggleStatusButton
                      toggleStatusAction={toggleStatusAction}
                      user={user}
                    />

                    <RemoveUserButton
                      deleteUser={deleteUser}
                      user={user}
                    />
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
