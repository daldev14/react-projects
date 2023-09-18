import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id)
    setCart(newCart)
  }

  const isInCart = (product) => cart.some((item) => item.id === product.id)

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}
