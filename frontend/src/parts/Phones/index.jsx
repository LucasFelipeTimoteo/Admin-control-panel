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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={phone}
        onChange={handlePhone}
        required
      />

      <label htmlFor="mobile-phone">Mobile Phone</label>
      <input
        type="tel"
        name="mobile-phone"
        id="mobile-phone"
        value={mobilePhone}
        onChange={handleMobilePhone}
        required
      />
    </>
  )
}
