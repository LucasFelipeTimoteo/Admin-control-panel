import React from 'react'
import './styles.css'

export default function Header({ userForm, userList }) {
  return (
    <div className="header">
      {
        userList &&
        <h1 className="header-title">Admin control panel</h1>
      }
      {
        userForm &&
        <h1 className="header-title">Edit user</h1>
      }
    </div>
  )
}
