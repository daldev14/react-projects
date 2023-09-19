export const initialState = []

/**
 *
 * @param {*} state - initial state
 * @param {*} action - (type) action. (payload) item
 * @returns
 */
export function reducer(state, action) {
  const { type: actionType, payload: actionPayload } = action
  console.log({ actionType, actionPayload })

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex !== -1) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [...state, { ...actionPayload, quantity: 1 }]
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      return newState
    }

    case 'CLEAR_CART': {
      return initialState
    }
  }

  return state
}
