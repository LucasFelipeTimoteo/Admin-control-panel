import React from 'react'

import AddUserForm from '../../components/AddUserForm'

import UserProfile from '../../parts/Profile'
import UserRegistry from '../../parts/UserRegistry'

import useUsername from '../../hooks/useUsername'
import useFirstName from '../../hooks/useFirstName'
import useLastName from '../../hooks/useLastName'
import useEmail from '../../hooks/useEmail'
import usePhone from '../../hooks/usePhone'
import useMobilePhone from '../../hooks/useMobilePhone'
import usePassword from '../../hooks/usePassword'
import useConfirmPassword from '../../hooks/useConfirmPassword'
// import useExpire from '../../hooks/useExpire'
// import useExpireDate from '../../hooks/useExpireDate'
import useStatus from '../../hooks/useStatus'
import useProfile from '../../hooks/useProfile'

import useStep from '../../hooks/useStep'
import useCompany from '../../hooks/useCompany'
import { useEditUserData } from '../../contexts/editUser'
import UserName from '../../parts/Profile/UserName'
import FirstAndLastName from '../../parts/Profile/FirstAndLastName'
import Email from '../../parts/Profile/Email'
import Phones from '../../parts/Profile/Phones'
import PasswordAndConfirmPassword from '../../parts/Profile/PasswordAndConfirmPassword'
// import ExpireAndExpiredate from '../../parts/Profile/ExpireAndExpireDate'
import Status from '../../parts/Profile/Status'
import FormButtons from '../../parts/Profile/FormButtons'
import Company from '../../parts/Profile/Company'
import Profile from '../../parts/Profile/Profile'

export default function AddUser() {
  const { username, handleUsername, handleEditUserDataUsername } = useUsername()
  const { firstName, handleFirstName, handleEditUserDataFirstName } = useFirstName()
  const { lastName, handleLastName, handleEditUserDataLastName } = useLastName()

  const { email, handleEmail, handleEditUserDataEmail } = useEmail()
  const { phone, handlePhone, handleEditUserDataPhone } = usePhone()
  const { mobilePhone, handleMobilePhone, handleEditUserDataMobilePhone } = useMobilePhone()

  const { password, handlePassword } = usePassword()
  const { confirmPassword, handleConfirmPassword } = useConfirmPassword()

  // const { expire, shouldExpire, shouldNotExpire, handleEditUserDataExpire } = useExpire()
  // const { expireDate, handleExpireDate, resetExpireDate, handleEditUserDataExpireDate } = useExpireDate()

  const { status, handleStatus, handleEditUserDataStatus } = useStatus()
  const { profile, handleProfile, handleEditUserDataProfile } = useProfile()
  const { company, handleCompany, handleEditUserDataCompany } = useCompany()

  const { step, nextStep, prevStep } = useStep()

  const { editUserdata, handleEditUserData } = useEditUserData()

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <AddUserForm>
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

          {/* 
            expire={expire}
            shouldExpire={shouldExpire}
            shouldNotExpire={shouldNotExpire}
            resetExpireDate={resetExpireDate}
            expireDate={expireDate}
            handleExpireDate={handleExpireDate}
  
            editUserdata={editUserdata}
            handleEditUserData={handleEditUserData}
            handleEditUserDataExpire={handleEditUserDataExpire}
            handleEditUserDataExpireDate={handleEditUserDataExpireDate}
          /> */}

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
            // expire={expire}
            // expireDate={expireDate}

            step={step}
            prevStep={prevStep}

            editUserdata={editUserdata}
            handleEditUserData={handleEditUserData}
          />
        </UserProfile>
      </AddUserForm>
    </form>
  )
}