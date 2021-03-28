import { useEffect, useState } from "react"
import api from "../services/api"

export default function useUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get('/users')
      const usersData = response.data
      setUsers(usersData)
    }

    getUsers()
  }, [])

  return users
}
