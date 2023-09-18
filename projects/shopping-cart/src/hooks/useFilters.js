import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export default function useFilters() {
  return useContext(FilterContext)
}
