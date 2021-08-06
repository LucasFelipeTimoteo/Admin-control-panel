import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

export default function AddUserButton() {
  const history = useHistory()

  const handleAddUserButtonClick = () => {
    history.push("/add-and-edit-user")
  }

  return (
    <button
      className="add-user-button"
      onClick={handleAddUserButtonClick}
    >
      +
    </button>
  )
}
