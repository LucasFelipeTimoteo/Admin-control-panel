import { useState } from 'react'

export default function useOrderUsers() {
  const [orderBy, setOrderBy] = useState('insertion')

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value)
  }

  return {
    orderBy,
    handleOrderBy
  }
}
