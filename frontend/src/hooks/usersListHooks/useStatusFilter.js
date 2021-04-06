import { useState } from "react"

export default function useStatusFilter() {
  const [statusFilter, setStatusFilter] = useState('')

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value)
  }

  return {
    statusFilter,
    handleStatusFilter
  }
}
