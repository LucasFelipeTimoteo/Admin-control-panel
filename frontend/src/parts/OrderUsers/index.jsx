import React from 'react'

export default function OrderUsers({ orderBy, handleOrderBy }) {
  return (
    <div>
      <label htmlFor="order" style={{ margin: '0 5px' }}>Order By</label>

      <select id="order" value={orderBy} onChange={handleOrderBy}>
        <option value="insertion">Insertion</option>
        <option value="ascendent">Ascendent</option>
        <option value="descendent">Descending</option>
      </select>
    </div>
  )
}
