import React from 'react'

export default function UserRegistry({ children, step }) {
  if (step !== 1) {
    return null
  }

  return (
    <>
    {children}
    </>
  )
}
