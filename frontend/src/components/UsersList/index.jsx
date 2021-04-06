import React from 'react'
import { Link } from 'react-router-dom'

import { useEditUserData } from '../../contexts/editUserData'

export default function UsersList({
  currentUsersList,
  toggleStatusAction,
  deleteUser
}) {
  const { handleEditUserData } = useEditUserData()

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Profile</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        {
          currentUsersList.map(user => (
            <tr style={{ textAlign: 'center' }} key={user.id}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.username}</td>
              <td>{user.profile}</td>
              <td>{user.status}</td>
              <td>
                <div>
                  <Link to="/add-and-edit-user" onClick={() => handleEditUserData(user)}>
                    <button>EDIT</button>
                  </Link>
                  <button onClick={() => toggleStatusAction(user)}>
                    Status
                  </button>

                  <button onClick={() => deleteUser(user)}>Remove</button>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>

    </table>
  )
}
