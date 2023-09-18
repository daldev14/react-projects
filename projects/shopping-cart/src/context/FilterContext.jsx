import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const changeMinPrice = (value) => {
    setFilters({
      ...filters,
      minPrice: value,
    })
  }

  const changeCategory = (value) => {
    setFilters({
      ...filters,
      category: value,
    })
  }

  const filterProduct = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return (
    <FilterContext.Provider value={{ filters, changeMinPrice, changeCategory, filterProduct }}>
      {children}
    </FilterContext.Provider>
  )
}
