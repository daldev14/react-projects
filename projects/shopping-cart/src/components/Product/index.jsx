import PropTypes from 'prop-types'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import { useState } from 'react'
import './styles.css'

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  isProductInCart: PropTypes.bool.isRequired,
}

export default function Product({ product, addToCart, removeFromCart, isProductInCart }) {
  return (
    <article className='product'>
      <img
        src={product.thumbnail}
        alt={product.title}
        className='product__image'
      />

      <p className='product__title'>
        <strong>{product.title}</strong> - ${product.price}
      </p>

      <div>
        <button
          className='product__btn'
          style={{ backgroundColor: isProductInCart ? '#dc3545' : '#0099ff' }}
          onClick={() => (isProductInCart ? removeFromCart(product) : addToCart(product))}>
          {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </article>
  )
}
