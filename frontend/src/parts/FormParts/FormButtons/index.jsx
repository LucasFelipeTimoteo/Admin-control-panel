import React from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../../services/api'
import './styles.css'

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
  const history = useHistory()

  const handleCancel = () => {
    history.push("users-list")
  }

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
      sessionStorage.clear()
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
    <div className="form-buttons-wrapper">
      {
        step === 1
          ?
          <button
            className="form-btn"
            type="button"
            onClick={() => {
              clearEditUserData()
              handleCancel()
            }}
          >
            Cancel
          </button>
          :
          <button
            className="form-btn"
            type="button"
            onClick={prevStep}
          >
            Prev
          </button>
      }

      {
        step === 2
          ?
          <button
            className="form-btn next-or-save-btn"
            type='button'
            edit_userdata={editUserdata}
            onClick={
              Object.entries(editUserdata).length !== 0 ? updateUser : saveNewUser
            }
          >
            {Object.entries(editUserdata).length !== 0 ? 'Update' : 'Save'}
          </button>
          :
          <button
            className="form-btn next-or-save-btn"
            type='button'
            onClick={nextStep}
          >
            next
          </button>
      }
    </div>
  )
}