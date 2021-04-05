import React, { useEffect } from 'react'

export default function Profile({
  profile,
  handleProfile,
  editUserdata,
  handleEditUserDataProfile
}) {

  useEffect(() => {
    if (editUserdata.profile) {
      handleEditUserDataProfile(editUserdata.profile)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <label htmlFor="profile">Profile</label>
      <select
        id="profile"
        value={profile}
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
