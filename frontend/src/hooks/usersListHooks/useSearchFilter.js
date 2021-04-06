import { useState } from "react"

export default function useSearchFilter() {
  const [searchFilter, setSearchFilter] = useState('')

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value)
  }

  return {
    searchFilter,
    handleSearchFilter
  }
}
