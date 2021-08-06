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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmail}
        required
      />
    </>
  )
}
