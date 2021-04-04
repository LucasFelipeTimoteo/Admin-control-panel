import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../../services/api'

export default function FormButtons({
  firstName,
  lastName,
  username,
  phone,
  mobilePhone,
  confirmPassword,
  // expire,
  // expireDate,
  password,
  email,
  status,
  profile,
  company,
  step,
  prevStep,
  nextStep,
  editUserdata
}) {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      firstName,
      lastName,
      username,
      email,
      ...(phone && { phone }),
      ...(mobilePhone && { mobilePhone }),
      password,
      confirmPassword,
      // expire,
      // ...(expireDate && { expireDate }),
      status,
      profile,
      company
    }
    const parsedUserdata = new URLSearchParams(userData)

    try {
      await api.post('/users', parsedUserdata)
      window.location = '/users-list'
    } catch (error) {
      console.log(error)
    }
  }
  
  const buttonShouldUpdateOrSaveUserData = (editUserdata) => (
    Object.entries(editUserdata).length !== 0 ? 'Update' : 'Save'
  )

  return (
    <>
      {
        step === 1
          ?
          <Link to="users-list">
            <button>Cancel</button>
          </Link>
          :
          <button onClick={prevStep}>Prev</button>
      }

      {
        step === 2
          ?
          <button
            type='button'
            edit_userdata={editUserdata}
            onClick={handleSubmit}
          >
            { buttonShouldUpdateOrSaveUserData(editUserdata) }
          </button>
          :
          <button
            type='button'
            onClick={nextStep}
          >
            next
          </button>
      }
    </>
  )
}
