import React, { useEffect } from 'react'

export default function Company({
  company,
  handleCompany,
  editUserdata,
  handleEditUserDataCompany
}) {

  useEffect(() => {
    if (editUserdata.company) {
      handleEditUserDataCompany(editUserdata.company)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <label htmlFor="company">Company</label>
      <select
        id="company"
        value={company}
        onChange={handleCompany}
        required
      >
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
      </select>
    </>
  )
}
