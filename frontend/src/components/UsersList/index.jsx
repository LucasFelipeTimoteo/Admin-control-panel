import React from 'react'
import ListActions from '../../parts/ListActions'

export default function UsersList({ currentUsersList }) {
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
                <ListActions />
              </td>
            </tr>
          ))
        }
      </tbody>

    </table>
  )
}
