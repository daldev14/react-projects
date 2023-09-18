import { useState } from 'react'
import { products as initialProducts } from '../../mocks/products.json'
import Product from '../Product'
import useCart from '../../hooks/useCart'
import useFilters from '../../hooks/useFilters'
import './styles.css'

export default function ListProducts() {
  const { addToCart, removeFromCart, isInCart } = useCart()
  const { filterProduct } = useFilters()

  const products = initialProducts.slice(0, 10)

  const filteredProducts = filterProduct(products)

  return (
    <section className='products__container'>
      {filteredProducts.map((product) => {
        const isProductInCart = isInCart(product)

        return (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isProductInCart={isProductInCart}
          />
        )
      })}
    </section>
  )
}
