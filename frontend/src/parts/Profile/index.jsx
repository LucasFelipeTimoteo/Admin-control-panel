import React from 'react'


export default function UserProfile({ children, step }) {
  if (step !== 2) {
    return null
  }

  return (
    <>
      {children}
    </>
  )
}
