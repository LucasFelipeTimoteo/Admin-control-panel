import React, { useEffect } from 'react'

export default function Phones({
  phone,
  handlePhone,
  mobilePhone,
  handleMobilePhone,
  editUserdata,
  handleEditUserDataPhone,
  handleEditUserDataMobilePhone
}) {

  useEffect(() => {
    if (editUserdata.phone) {
      handleEditUserDataPhone(editUserdata.phone)
    }

    if(editUserdata.mobilePhone){
      handleEditUserDataMobilePhone(editUserdata.mobilePhone)
    }
  }, [editUserdata, handleEditUserDataPhone])

  return (
    <>
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={editUserdata.phone || phone}
        onChange={handlePhone}
        required
      />

      <label htmlFor="mobile-phone">Mobile Phone</label>
      <input
        type="tel"
        name="mobile-phone"
        id="mobile-phone"
        value={editUserdata.mobilePhone || mobilePhone}
        onChange={handleMobilePhone}
        required
      />
    </>
  )
}
