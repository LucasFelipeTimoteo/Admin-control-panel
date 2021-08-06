import React from 'react'
import './styles.css'

export default function UserForm({ children }) {
  return (
    <form className="user-form">
      { children }
    </ form>
  )
}