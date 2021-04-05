import React from 'react'

export default function PasswordAndConfirmPassword({
  password,
  handlePassword,
  confirmPassword,
  handleConfirmPassword,
}) {
  return (
    <>
      <label htmlFor="password">Password</label>
      <input type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePassword}
        required
      />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input type="password"
        name="confirm-password"
        id="confirm-password"
        value={confirmPassword}
        onChange={handleConfirmPassword}
        required
      />
    </>
  )
}
