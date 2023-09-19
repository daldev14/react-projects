export const cartInitialState = JSON.parse(window.localStorage.getItem('SHOPPING_CART_V1')) || []

const updateLocalStorage = (state) => {
  window.localStorage.setItem('SHOPPING_CART_V1', JSON.stringify(state))
}

/**
 *
 * @param {*} state - initial state
 * @param {*} action - (type) action. (payload) item
 * @returns state
 */
export function reducer(state, action) {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex !== -1) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1

        const newState2 = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1),
        ]

        updateLocalStorage(newState2)
        return newState2
      }

      const newState = [...state, { ...actionPayload, quantity: 1 }]
      updateLocalStorage(newState)

      return newState
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }
  }

  return state
}
