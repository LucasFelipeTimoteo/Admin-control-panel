import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default function FormButtons({
  firstName,
  lastName,
  username,
  phone,
  mobilePhone,
  confirmPassword,
  password,
  email,
  status,
  profile,
  company,
  step,
  prevStep,
  nextStep,
  editUserdata,
  clearEditUserData
}) {
  
  const saveNewUser = async (e) => {
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
  
  const updateUser = async (e) => {
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
      status,
      profile,
      company
    }
    const parsedUserdata = new URLSearchParams(userData)

    try {
      await api.put(`/users/${editUserdata.id}`, parsedUserdata)
      window.location = '/users-list'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
        step === 1
          ?
          <Link to="users-list" onClick={clearEditUserData}>
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
            onClick={
              Object.entries(editUserdata).length !== 0 ? updateUser : saveNewUser
            }
          >
            { Object.entries(editUserdata).length !== 0 ? 'Update' : 'Save' }
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