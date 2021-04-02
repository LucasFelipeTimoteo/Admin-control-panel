import { createContext, useContext, useState } from "react";

const EditUserContext = createContext()

export const useEditUserData = () => {
  const { editUserdata, handleEditUserData } = useContext(EditUserContext)

  return {
    editUserdata,
    handleEditUserData
  }
}

export function EditUserProvider({ children }) {
  const [editUserdata, setEditUserData] = useState({})

  const handleEditUserData = (user) => {
    setEditUserData(user)
  }

  return (
    <EditUserContext.Provider value={{ editUserdata, handleEditUserData }}>
      {children}
    </EditUserContext.Provider>
  )
}