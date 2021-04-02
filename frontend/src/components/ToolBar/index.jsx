import React from 'react'

export default function ToolBar({ children }) {
  return (
    <div style={{ backgroundColor: 'whitesmoke', height: 35, display: 'flex', justifyContent: 'space-around' }}>
      { children }
    </div>
  )
}
