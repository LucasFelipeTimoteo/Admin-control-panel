import React from 'react'
import './styles.css'

export default function ToolBar({ children }) {
  return (
    <div className="toolbar">
      { children }
    </div>
  )
}
