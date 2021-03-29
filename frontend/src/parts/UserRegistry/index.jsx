import React from 'react'
import { Link } from 'react-router-dom'

export default function UserRegistry({
  username,
  handleUsername,

  firstName,
  handleFirstName,

  lastName,
  handleLastName,

  email,
  handleEmail,

  phone,
  handlePhone,

  mobilePhone,
  handleMobilePhone,

  password,
  handlePassword,

  confirmPassword,
  handleConfirmPassword,

  expire,
  shouldExpire,
  shouldNotExpire,

  expireDate,
  handleExpireDate,
  resetExpireDate,

  status,
  handleStatus,

  step,
  nextStep
}) {
  if (step !== 1) {
    return null
  }
  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={handleUsername}
        required
      />

      <label htmlFor="firstName">First name</label>
      <input type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={handleFirstName}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={handleLastName}
        required
      />

      <label htmlFor="email">Email</label>
      <input type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmail}
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={phone}
        onChange={handlePhone}
        required
      />

      <label htmlFor="mobile-phone">Mobile Phone</label>
      <input
        type="tel"
        name="mobile-phone"
        id="mobile-phone"
        value={mobilePhone}
        onChange={handleMobilePhone}
        required
      />

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

      <label>Expire</label>
      <div>
        <input type="radio"
          name="expires"
          id="expires"
          checked={expire}
          onChange={shouldExpire}
        />
        <label htmlFor="expires">Yes</label>

        <input type="radio"
          name="not-expires"
          id="not-expires"
          checked={!expire}
          onChange={shouldNotExpire}
          onClick={resetExpireDate}
        />
        <label htmlFor="not-expires">Never</label>
      </div>

      {
        expire &&
        <>
          <label htmlFor="expire-date">Expire Date</label>
          <input
            type="date"
            name="expire-date"
            id="expire-date"
            value={expireDate}
            onChange={handleExpireDate}
            required={expire}
          />
        </>
      }

      <label htmlFor="activity">Status</label>
      <select id="activity" value={status} onChange={handleStatus}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button onClick={nextStep}>next</button>
      <Link to="users-list">
        <button>Cancel</button>
      </Link>
    </>
  )
}
