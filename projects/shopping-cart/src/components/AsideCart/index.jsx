import { useState } from 'react'
import { CartIcon, RemoveFromCartIcon, ClearCartIcon } from '../Icons'
import './styles.css'
import useCart from '../../hooks/useCart'

export default function AsideCart() {
  const [openCart, setOpenCart] = useState(false)
  const { cart, clearCart } = useCart()

  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }

  const handleClearCart = () => {
    clearCart()
  }

  return (
    <>
      <button
        className='cart__btn cart-btn--open'
        onClick={handleOpenCart}>
        <CartIcon />
      </button>

      <aside
        className='cart__container'
        style={{ display: openCart ? 'flex' : 'none' }}>
        <h2 className='cart__title'>Cart</h2>
        <ul className='cart__list'>
          {cart.map((product) => {
            return (
              <li
                key={product.id}
                className='cart__product'>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='cart__image'
                />
                <h3 className='cart__title'>{product.title}</h3>
                <button className='cart__btn--remove'>
                  <RemoveFromCartIcon />
                </button>
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
