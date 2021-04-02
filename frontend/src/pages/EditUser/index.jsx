import React from 'react'

import EditUserForm from '../../components/EditUserForm'
import { useEditUserData } from '../../contexts/editUser'

export default function EditUser() {
  const { editUserdata } = useEditUserData()

  return (
    <>
      <EditUserForm 
          username={editUserdata.username}
          firstName={editUserdata.firstName}
          lastName={editUserdata.lastName}

          email={editUserdata.email}
          phone={editUserdata.phone}
          mobilePhone={editUserdata.mobilePhone}

          password={editUserdata.password}
          confirmPassword={editUserdata.confirmPassword}

          expire={editUserdata.expire}
          expireDate={editUserdata.expireDate}  
          resetExpireDate={editUserdata.resetExpireDate}

          status={editUserdata.status}
          profile={editUserdata.profile}
          company={editUserdata.company}
      />
    </>
  )
}
