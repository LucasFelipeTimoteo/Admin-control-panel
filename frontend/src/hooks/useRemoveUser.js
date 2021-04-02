import { useEffect } from 'react'
import api from '../services/api'

export default function useRemoveUser(userId) {
  useEffect(() => {
    const deleteUser = async () => {
      try {
        await api.delete(`/users/${userId}`)
      } catch (error) {
        console.log(error)
      }
    }

    deleteUser()
  }, [userId])
}
