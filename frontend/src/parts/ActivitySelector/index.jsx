import React from 'react'

export default function ActivitySelector({ userActivity, handleUserActivity }) {
  return (
    <div>
      <label htmlFor="selectActivity" style={{ marginRight: 5 }}>Activity</label>
      <select value={userActivity} onChange={handleUserActivity} id="selectActivity">
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
