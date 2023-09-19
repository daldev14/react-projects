import { createContext } from 'react'
import PropTypes from 'prop-types'
import useCartReducer from '../hooks/useCartReducer'

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const CartContext = createContext()

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}
