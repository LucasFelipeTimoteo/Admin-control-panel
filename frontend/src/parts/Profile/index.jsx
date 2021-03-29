import React from 'react'

export default function Profile({
  username,
  firstName,
  lastName,

  step,
  prevStep,

  profile,
  handleProfile,
  
  company,
  handleCompany
}) {
  if(step !== 2) {
    return null
  }

  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        readOnly
        required
      />

      <label htmlFor="firstName">First name</label>
      <input type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        readOnly
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        readOnly
        required
      />

      <label htmlFor="profile">Profile</label>
      <select id="profile" value={profile} onChange={handleProfile} required>
        <option value="driver">Driver</option>
        <option value="office">Office</option>
        <option value="office-suport">Office suport</option>
        <option value="business-contact">Business contact</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="company">Company</label>
      <select id="company" value={company} onChange={handleCompany} required>
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
      </select>

      <button onClick={prevStep}>prev</button>
      <button type='submit'>Save</button>
    </>
  )
}
