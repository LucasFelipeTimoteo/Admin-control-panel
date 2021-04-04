import React from 'react'

export default function Profile({ profile, handleProfile, editUserdata }) {
  return (
    <>
      <label htmlFor="profile">Profile</label>
      <select
        id="profile"
        value={editUserdata.profile || profile}
        onChange={handleProfile}
        required
      >
        <option value="driver">Driver</option>
        <option value="office">Office</option>
        <option value="office-suport">Office suport</option>
        <option value="business-contact">Business contact</option>
        <option value="other">Other</option>
      </select>
    </>
  )
}
