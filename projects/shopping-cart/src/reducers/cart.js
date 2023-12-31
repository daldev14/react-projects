export const cartInitialState = JSON.parse(window.localStorage.getItem('SHOPPING_CART_V1')) || []

const updateLocalStorage = (state) => {
  window.localStorage.setItem('SHOPPING_CART_V1', JSON.stringify(state))
}

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}

/**
 *
 * @param {*} state - initial state
 * @param {*} action - (type) action. (payload) item
 * @returns state
 */
export function reducer(state, action) {
  const { type: actionType, payload: actionPayload } = action

  if (actionType === CART_ACTION_TYPES.ADD_TO_CART) {
    const { id } = actionPayload
    const productInCartIndex = state.findIndex((item) => item.id === id)

    if (productInCartIndex !== -1) {
      const newState = structuredClone(state)
      newState[productInCartIndex].quantity += 1
      updateLocalStorage(newState)

      return newState
    }

    const newState = [...state, { ...actionPayload, quantity: 1 }]
    updateLocalStorage(newState)

    return newState
  }

  if (actionType === CART_ACTION_TYPES.REMOVE_FROM_CART) {
    const { id } = actionPayload
    const newState = state.filter((item) => item.id !== id)
    updateLocalStorage(newState)
    return newState
  }

  if (actionType === CART_ACTION_TYPES.CLEAR_CART) {
    updateLocalStorage([])
    return []
  }

  return state
}
