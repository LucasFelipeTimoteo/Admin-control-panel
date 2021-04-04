import React, { useEffect } from 'react'

export default function UserName({
  username,
  handleUsername,
  editUserdata,
  step,
  handleEditUserDataUsername
}) {
  const onChangeCondition = (handleUsername) => (
    handleUsername ? handleUsername : null
  )

  const readOnlyCondition = (step) => (
    step === 1 ? false : true
  )

  useEffect(() => {
    if (editUserdata.username) {
      handleEditUserDataUsername(editUserdata.username)
    }
  }, [editUserdata, handleEditUserDataUsername])

  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={onChangeCondition(handleUsername)}
        readOnly={readOnlyCondition(step)}
        required
      />
    </>
  )
}