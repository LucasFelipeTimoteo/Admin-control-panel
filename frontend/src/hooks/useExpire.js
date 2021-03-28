import { useState } from 'react'

export default function useExpire() {
  const [expire, setExpire] = useState(false)

  const shouldExpire = () => {
    setExpire(true)
  }

  const shouldNotExpire = () => {
    setExpire(false)
  }

  return {
    expire,
    shouldExpire,
    shouldNotExpire
  }
}
