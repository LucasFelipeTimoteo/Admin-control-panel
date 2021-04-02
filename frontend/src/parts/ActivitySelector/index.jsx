import React from 'react'

export default function ActivitySelector({ statusFilter, handleStatusFilter }) {
  return (
    <div>
      <label htmlFor="statusFilter" style={{ marginRight: 5 }}>Activity</label>
      <select value={statusFilter} onChange={handleStatusFilter} id="statusFilter">
        <option value="">
          None
        </option>
        <option value="active">
          Active
        </option>
        <option value="inactive">
          Inactive
        </option>
      </select>
    </div>
  )
}
