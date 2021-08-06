import React from 'react'
import removeIcon from '../../assets/images/delete.svg'
import './styles.css'

export default function RemoveUserButton({ deleteUser, user }) {
  return (
    <button
      className="remove-button"
      onClick={() => deleteUser(user)}
      title="remove user"
      aria-label="remove"
    >
      <img src={removeIcon} alt="Remove user button" />
    </button>
  )
}
