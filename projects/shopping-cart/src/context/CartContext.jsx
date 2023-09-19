import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    if (productInCartIndex !== -1) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

  const clearCart = () => setCart([])

  const isInCart = (product) => cart.some((item) => item.id === product.id)

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
