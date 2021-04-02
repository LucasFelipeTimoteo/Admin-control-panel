import React from 'react'
import { Link } from 'react-router-dom'

export default function EditUserForm({
  username,
  firstName,
  lastName,
  email,
  phone,
  mobilePhone,
  password,
  confirmPassword,
  expire,
  expireDate,  
  resetExpireDate,
  status,
  profile,
  company,
}) {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        readonly
      />

      <label htmlFor="firstName">First name</label>
      <input type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        readonly
      />

      <label htmlFor="lastName">Last Name</label>
      <input type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        readonly
      />

      <label htmlFor="email">Email</label>
      <input type="email"
        name="email"
        id="email"
        value={email}
        readonly
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={phone}
        readonly
      />

      <label htmlFor="mobile-phone">Mobile Phone</label>
      <input
        type="tel"
        name="mobile-phone"
        id="mobile-phone"
        value={mobilePhone}
        readonly
      />

      <label htmlFor="password">Password</label>
      <input type="password"
        name="password"
        id="password"
        value={password}
        readonly
      />

      <label htmlFor="confirm-password">Confirm Password</label>
      <input type="password"
        name="confirm-password"
        id="confirm-password"
        value={confirmPassword}
        readonly
      />

      <label>Expire</label>
      <div>
        <input type="radio"
          name="expires"
          id="expires"
          checked={expire}
        />
        <label htmlFor="expires">Yes</label>

        <input type="radio"
          name="not-expires"
          id="not-expires"
          checked={!expire}
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
          />
        </>
      }

      <label htmlFor="activity">Status</label>
      <select id="activity" value={status} >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <label htmlFor="profile">Profile</label>
      <select id="profile" value={profile} readonly>
        <option value="driver">Driver</option>
        <option value="office">Office</option>
        <option value="office-suport">Office suport</option>
        <option value="business-contact">Business contact</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="company">Company</label>
      <select id="company" value={company} readonly>
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
      </select>

      <Link to="users-list">
        <button>Cancel</button>
      </Link>
    </form>
  )
}
