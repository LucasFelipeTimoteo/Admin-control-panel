import React, { createContext, useContext, useState } from "react";

const userActivityContext = createContext()

export function useStatusFilter() {
  const { userActivity, handleUserActivity } = useContext(userActivityContext)

  return {
    userActivity,
    handleUserActivity
  }
}

export function StatusFilterProvider({ children }) {
  const [userActivity, setUserActivity] = useState('')

  const handleUserActivity = (event) => {
    const value = event.target.value
    setUserActivity(value)
  }

  return (
    <userActivityContext.Provider value={{ userActivity, handleUserActivity }}>
      {children}
    </userActivityContext.Provider>
  );
}

