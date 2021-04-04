import React, { useEffect } from 'react'

export default function FirstAndLastName({
  firstName,
  handleFirstName,
  lastName,
  handleLastName,
  editUserdata,
  handleEditUserDataFirstName,
  handleEditUserDataLastName,
  step
}) {
  const firstNameOnChangeCondition = (handleFirstName) => (
    handleFirstName ? handleFirstName : null
  )

  const lastNameOnChangeCondition = (handleLastName) => (
    handleLastName ? handleLastName : null
  )

  const readOnlyCondition = (step) => (
    step === 1 ? false : true
  )

  useEffect(() => {
    if (editUserdata.firstName) {
      handleEditUserDataFirstName(editUserdata.firstName)
    }

    if (editUserdata.lastName) {
      handleEditUserDataLastName(editUserdata.lastName)
    }
  }, [editUserdata, handleEditUserDataFirstName, handleEditUserDataLastName])

  return (
    <>
      <label htmlFor="firstName">First name</label>
      <input type="text"
        name="firstName"
        id="firstName"
        value={editUserdata.firstName || firstName}
        onChange={firstNameOnChangeCondition(handleFirstName)}
        readOnly={readOnlyCondition(step)}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input type="text"
        name="lastName"
        id="lastName"
        value={editUserdata.lastName || lastName}
        onChange={lastNameOnChangeCondition(handleLastName)}
        readOnly={readOnlyCondition(step)}
        required
      />
    </>
  )
}
