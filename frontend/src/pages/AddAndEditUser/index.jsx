import React from 'react'

import UserForm from '../../components/UserForm'

import UserProfile from '../../parts/UserProfile'
import UserRegistry from '../../parts/UserRegistry'

import useUsername from '../../hooks/userFormHooks/useUsername'
import useFirstName from '../../hooks/userFormHooks/useFirstName'
import useLastName from '../../hooks/userFormHooks/useLastName'
import useEmail from '../../hooks/userFormHooks/useEmail'
import usePhone from '../../hooks/userFormHooks/usePhone'
import useMobilePhone from '../../hooks/userFormHooks/useMobilePhone'
import usePassword from '../../hooks/userFormHooks/usePassword'
import useConfirmPassword from '../../hooks/userFormHooks/useConfirmPassword'
import useStatus from '../../hooks/userFormHooks/useStatus'
import useProfile from '../../hooks/userFormHooks/useProfile'
import useStep from '../../hooks/userFormHooks/useStep'
import useCompany from '../../hooks/userFormHooks/useCompany'

import UserName from '../../parts/UserName'
import FirstAndLastName from '../../parts/FirstAndLastName'
import Email from '../../parts/Email'
import Phones from '../../parts/Phones'
import PasswordAndConfirmPassword from '../../parts/PasswordAndConfirmPassword'
import Status from '../../parts/Status'
import FormButtons from '../../parts/FormButtons'
import Company from '../../parts/Company'
import Profile from '../../parts/Profile'

import { useEditUserData } from '../../contexts/editUserData'

export default function AddAndEditUser() {
  const { username, handleUsername, handleEditUserDataUsername } = useUsername()
  const { firstName, handleFirstName, handleEditUserDataFirstName } = useFirstName()
  const { lastName, handleLastName, handleEditUserDataLastName } = useLastName()

  const { email, handleEmail, handleEditUserDataEmail } = useEmail()
  const { phone, handlePhone, handleEditUserDataPhone } = usePhone()
  const { mobilePhone, handleMobilePhone, handleEditUserDataMobilePhone } = useMobilePhone()

  const { password, handlePassword } = usePassword()
  const { confirmPassword, handleConfirmPassword } = useConfirmPassword()

  const { status, handleStatus, handleEditUserDataStatus } = useStatus()
  const { profile, handleProfile, handleEditUserDataProfile } = useProfile()
  const { company, handleCompany, handleEditUserDataCompany } = useCompany()

  const { step, nextStep, prevStep } = useStep()

  const { editUserdata, handleEditUserData, clearEditUserData } = useEditUserData()

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <UserForm>
        <UserRegistry step={step}>
          <UserName
            username={username}
            handleUsername={handleUsername}
            step={step}

            editUserdata={editUserdata}
            handleEditUserData={handleEditUserData}
            handleEditUserDataUsername={handleEditUserDataUsername}
          />

          <FirstAndLastName
            firstName={firstName}
            handleFirstName={handleFirstName}
            lastName={lastName}
            handleLastName={handleLastName}
            step={step}

            editUserdata={editUserdata}
            handleEditUserData={handleEditUserData}
            handleEditUserDataFirstName={handleEditUserDataFirstName}
            handleEditUserDataLastName={handleEditUserDataLastName}
          />

          <Email
            email={email}
            handleEmail={handleEmail}

            editUserdata={editUserdata}
            handleEditUserData={handleEditUserData}
            handleEditUserDataEmail={handleEditUserDataEmail}
          />

          <Phones
            phone={phone}
            handlePhone={handlePhone}
            mobilePhone={mobilePhone}
            handleMobilePhone={handleMobilePhone}
            editUserdata={editUserdata}
        
            handleEditUserData={handleEditUserData}
            handleEditUserDataPhone={handleEditUserDataPhone}
            handleEditUserDataMobilePhone={handleEditUserDataMobilePhone}
          />

          <PasswordAndConfirmPassword
            password={password}
            handlePassword={handlePassword}
            confirmPassword={confirmPassword}
            handleConfirmPassword={handleConfirmPassword}
          />

          <Status
            status={status}
            handleStatus={handleStatus}
            editUserdata={editUserdata}

            handleEditUserData={handleEditUserData}
            handleEditUserDataStatus={handleEditUserDataStatus}
          />

          <FormButtons
            step={step}
            nextStep={nextStep}
            clearEditUserData={clearEditUserData}
          />
        </UserRegistry>

        <UserProfile step={step}>
          <UserName
            username={username}
            editUserdata={editUserdata}
            handleEditUserData={handleEditUserData}
          />

          <FirstAndLastName
            firstName={firstName}
            lastName={lastName}
            editUserdata={editUserdata}
            handleEditUserData={handleEditUserData}
          />

          <Profile
            profile={profile}
            handleProfile={handleProfile}
            editUserdata={editUserdata}

            handleEditUserData={handleEditUserData}
            handleEditUserDataProfile={handleEditUserDataProfile}
          />

          <Company
            company={company}
            handleCompany={handleCompany}
            editUserdata={editUserdata}

            handleEditUserData={handleEditUserData}
            handleEditUserDataCompany={handleEditUserDataCompany}
          />

          <FormButtons
            firstName={firstName}
            lastName={lastName}
            username={username}
            email={email}
            phone={phone}
            mobilePhone={mobilePhone}
            password={password}
            confirmPassword={confirmPassword}
            status={status}
            profile={profile}
            company={company}

            step={step}
            prevStep={prevStep}

            editUserdata={editUserdata}
            handleEditUserData={handleEditUserData}
            clearEditUserData={clearEditUserData}
          />
        </UserProfile>
      </UserForm>
    </form>
  )
}