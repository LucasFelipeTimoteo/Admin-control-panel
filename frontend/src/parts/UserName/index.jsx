import React, { useEffect } from 'react'

export default function UserName({
  username,
  handleUsername,
  editUserdata,
  step,
  handleEditUserDataUsername
}) {

  const onChangeCondition = (handleUsername) => {
    return handleUsername ? handleUsername : null
  }

  const readOnlyCondition = (step) => (
    step === 1 ? false : true
  )

  useEffect(() => {
    if (editUserdata.username && step === 1) {
      handleEditUserDataUsername(editUserdata.username)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]) 

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