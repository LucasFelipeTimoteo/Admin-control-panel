import React from 'react'

export default function SearchFilter({ searchFilter, handleSearchFilter }) {
  return (
    <>
      <input
        type="text"
        value={searchFilter}
        onChange={handleSearchFilter}
      />
    </>
  )
}
