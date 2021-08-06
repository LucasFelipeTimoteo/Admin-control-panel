import React from 'react'
import removeIcon from '../../assets/images/delete.svg'
import './styles.css'

export default function RemoveUserButton({ deleteUser, user }) {
  return (
    <button
      className="remove-button"
      onClick={() => deleteUser(user)}
    >
      <img src={removeIcon} alt="Remove user button" />
    </button>
  )
}
