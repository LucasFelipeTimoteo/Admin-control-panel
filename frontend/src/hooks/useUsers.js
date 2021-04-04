import { useEffect, useState } from "react"
import api from "../services/api"

export default function useUsers() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await api.get('/users')
    const usersData = response.data
    setUsers(usersData)
  }

  const deleteUser = async (user) => {
    try {
      await api.delete(`/users/${user.id}`)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  const editUser = async (id, user) => {
    try {
      await api.put(`/users/${user.id}`, {id, ...user})
    } catch (error) {
      console.log(error)
    }

    // window.location = 'users-list'
  }

  useEffect(() => {
    getUsers()
  }, [])

  return {
    users,
    deleteUser,
    editUser
  }
}
