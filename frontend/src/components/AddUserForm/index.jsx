import React from 'react'
import Profile from '../../parts/Profile'
import UserRegistry from '../../parts/UserRegistry'

export default function AddUserForm({
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

  profile,
  handleProfile,

  company,
  handleCompany,

  step,
  nextStep,
  prevStep
}) {
  return (
    <>
      <UserRegistry
        username={username}
        handleUsername={handleUsername}

        firstName={firstName}
        handleFirstName={handleFirstName}

        lastName={lastName}
        handleLastName={handleLastName}

        email={email}
        handleEmail={handleEmail}

        phone={phone}
        handlePhone={handlePhone}

        mobilePhone={mobilePhone}
        handleMobilePhone={handleMobilePhone}

        password={password}
        handlePassword={handlePassword}

        confirmPassword={confirmPassword}
        handleConfirmPassword={handleConfirmPassword}

        status={status}
        handleStatus={handleStatus}

        expire={expire}
        shouldExpire={shouldExpire}
        shouldNotExpire={shouldNotExpire}

        expireDate={expireDate}
        handleExpireDate={handleExpireDate}
        resetExpireDate={resetExpireDate}

        step={step}
        nextStep={nextStep}
      />

      <Profile
        username={username}
        firstName={firstName}
        lastName={lastName}

        profile={profile}
        handleProfile={handleProfile}

        company={company}
        handleCompany={handleCompany}
        
        step={step}
        prevStep={prevStep}
      />
    </>
  )
}