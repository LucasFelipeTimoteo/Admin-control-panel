import { useState } from 'react'

export default function useExpire() {
  const [expire, setExpire] = useState(false)

  const shouldExpire = () => {
    setExpire(true)
  }

  const shouldNotExpire = () => {
    setExpire(false)
  }

  const handleEditUserDataExpire = (editUserDataUsername) => {
    setExpire(editUserDataUsername)
  }

  return {
    expire,
    shouldExpire,
    shouldNotExpire,
    handleEditUserDataExpire
  }
}
