import { createContext, useContext, useState } from "react";

const EditUserContext = createContext()

export const useEditUserData = () => {
  const {
    editUserdata,
    handleEditUserData,
    clearEditUserData
  } = useContext(EditUserContext)

  return {
    editUserdata,
    handleEditUserData,
    clearEditUserData
  }
}

export function EditUserProvider({ children }) {
  const [editUserdata, setEditUserData] = useState({})

  const handleEditUserData = (user) => {
    setEditUserData(user)
  }

  const clearEditUserData = () => {
    setEditUserData({})
  }

  return (
    <EditUserContext.Provider
      value={{
        editUserdata,
        handleEditUserData,
        clearEditUserData
      }}
    >
      {children}
    </EditUserContext.Provider>
  )
}