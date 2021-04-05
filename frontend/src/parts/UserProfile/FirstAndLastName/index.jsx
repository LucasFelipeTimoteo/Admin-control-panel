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
    if (editUserdata.firstName && step === 1) {
      handleEditUserDataFirstName(editUserdata.firstName)
    }

    if (editUserdata.lastName && step === 1) {
      handleEditUserDataLastName(editUserdata.lastName)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  return (
    <>
      <label htmlFor="firstName">First name</label>
      <input type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={firstNameOnChangeCondition(handleFirstName)}
        readOnly={readOnlyCondition(step)}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={lastNameOnChangeCondition(handleLastName)}
        readOnly={readOnlyCondition(step)}
        required
      />
    </>
  )
}
