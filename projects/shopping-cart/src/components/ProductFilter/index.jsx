import { useId } from 'react'
import useFilters from '../../hooks/useFilters'
import './styles.css'

export default function ProductFilter() {
  const { filters, changeMinPrice, changeCategory } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    changeMinPrice(event.target.value)
  }

  const handleChangeCategory = (event) => {
    changeCategory(event.target.value)
  }

  return (
    <section className='filter'>
      <div className='filter__group'>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type='range'
          name='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          value={filters.minPrice}
          className='filter__range'
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div className='filter__group'>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          name='category'
          id={categoryFilterId}
          onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
