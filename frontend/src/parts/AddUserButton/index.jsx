import React from 'react'
import { Link } from 'react-router-dom'

export default function AddUserButton() {
  return (
    <div>
      <Link to="/add-and-edit-user" >
        <button>+</button>
      </Link>
    </div>
  )
}
