import React from 'react'

export default function Status({
  status,
  handleStatus,
  editUserdata
}) {
  return (
    <>
      <label htmlFor="activity">Status</label>
      <select
        id="activity"
        value={editUserdata.status || status}
        onChange={handleStatus}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </>
  )
}
