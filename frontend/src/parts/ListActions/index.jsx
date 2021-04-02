import React from 'react'

export default function ListActions({ setStatusToInactive }) {

  return (
    <div>
      <button>EDIT</button>
      <button onClick={setStatusToInactive}>-</button>
    </div>
  )
}
