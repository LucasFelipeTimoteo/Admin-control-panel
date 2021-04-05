import React, { useEffect } from 'react'

export default function Status({
  status,
  handleStatus,
  editUserdata,
  handleEditUserDataStatus
}) {

  useEffect(() => {
    if (editUserdata.status) {
      handleEditUserDataStatus(editUserdata.status)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
