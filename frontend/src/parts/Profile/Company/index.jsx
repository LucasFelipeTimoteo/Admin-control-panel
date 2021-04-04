import React from 'react'

export default function Company({ company, handleCompany, editUserdata }) {
  return (
    <>
      <label htmlFor="company">Company</label>
      <select
        id="company"
        value={editUserdata.company || company}
        onChange={handleCompany}
        required
      >
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
      </select>
    </>
  )
}
