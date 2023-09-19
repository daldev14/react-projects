import { useState, useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons'
import useCart from '../../hooks/useCart'
import './styles.css'

export default function AsideCart() {
  const [openCart, setOpenCart] = useState(false)
  const { cart, clearCart } = useCart()
  const cartCheckboxId = useId()

  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }

  const handleClearCart = () => {
    clearCart()
  }

  return (
    <>
      <label
        className='cart__btn cart-btn--open'
        htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input
        id={cartCheckboxId}
        type='checkbox'
        className='cart__checkbox'
      />

      <aside className='cart__container'>
        <h2 className='cart__title'>Cart</h2>
        <ul className='cart__list'>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <article className='cart__product'>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='product__image'
                  />
                  <h3 className='product__title--cart'>{product.title}</h3>
                  <div className='product__quantity'>
                    <small>Qty: 10</small>
                    <button className='product__btn--remove'>+</button>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        <button
          className='cart__btn cart__btn--checkout'
          onClick={handleClearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
