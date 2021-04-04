import React, { useEffect } from 'react'

export default function Email({
  email,
  handleEmail,
  editUserdata,
  handleEditUserDataEmail
}) {

  useEffect(() => {
    if (editUserdata.email) {
      handleEditUserDataEmail(editUserdata.email)
    }
  }, [editUserdata, handleEditUserDataEmail])
  
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email"
        name="email"
        id="email"
        value={editUserdata.email || email}
        onChange={handleEmail}
        required
      />
    </>
  )
}
