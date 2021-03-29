import React from 'react'
import api from '../../services/api'

import AddUserForm from '../../components/AddUserForm'

import useUsername from '../../hooks/useUsername'
import useFirstName from '../../hooks/useFirstName'
import useLastName from '../../hooks/useLastName'
import useEmail from '../../hooks/useEmail'
import usePhone from '../../hooks/usePhone'
import useMobilePhone from '../../hooks/useMobilePhone'
import usePassword from '../../hooks/usePassword'
import useConfirmPassword from '../../hooks/useConfirmPassword'
import useExpire from '../../hooks/useExpire'
import useExpireDate from '../../hooks/useExpireDate'
import useUserActivity from '../../hooks/useUserActivity'
import useProfile from '../../hooks/useProfile'

import useStep from '../../hooks/useStep'
import useCompany from '../../hooks/useCompany'

export default function AddUser() {
  const { username, handleUsername } = useUsername()
  const { firstName, handleFirstName } = useFirstName()
  const { lastName, handleLastName } = useLastName()
  const { email, handleEmail } = useEmail()
  const { phone, handlePhone } = usePhone()
  const { mobilePhone, handleMobilePhone } = useMobilePhone()
  const { password, handlePassword } = usePassword()
  const { confirmPassword, handleConfirmPassword } = useConfirmPassword()
  const { expire, shouldExpire, shouldNotExpire } = useExpire()
  const { expireDate, handleExpireDate, resetExpireDate } = useExpireDate()
  const { userActivity, handleUserActivity } = useUserActivity()
  const { profile, handleProfile } = useProfile()
  const { company, handleCompany } = useCompany()

  const { step, nextStep, prevStep } = useStep()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(`
    ${username}
    ${firstName}
    ${lastName}
    ${email}
    ${phone}
    ${mobilePhone}
    ${password}
    ${confirmPassword}
    expire: ${expire}
    ${expireDate}
    ${userActivity}
    `)

    const userData = {
      firstName,
      lastName,
      username,
      email,
      ...(phone && { phone }),
      ...(mobilePhone && { mobilePhone }),
      password,
      confirmPassword,
      ...(expireDate && { expireDate }),
      status: userActivity,
      profile,
      company
    }
    const parsedUserdata = new URLSearchParams(userData)

    try {
      await api.post('/users', parsedUserdata)
      // window.location = '/'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
      <AddUserForm
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

          userActivity={userActivity}
          handleUserActivity={handleUserActivity}

          expire={expire}
          shouldExpire={shouldExpire}
          shouldNotExpire={shouldNotExpire}

          expireDate={expireDate}
          handleExpireDate={handleExpireDate}
          resetExpireDate={resetExpireDate}

          profile={profile}
          handleProfile={handleProfile}

          company={company}
          handleCompany={handleCompany}

          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
      />
    </form>
  )
}
