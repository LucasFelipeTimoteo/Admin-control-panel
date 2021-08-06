import React from 'react'
import { Link } from 'react-router-dom'
import editUserIcon from '../../assets/images/edit.svg'

export default function EditUserButton({handleEditUserData, user}) {
  return (
    <Link to="/add-and-edit-user"
      onClick={() => handleEditUserData(user)}
    >
      <img src={editUserIcon} alt="Edit user button" />
    </Link>
  )
}
