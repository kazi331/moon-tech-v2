// javascript currying function

import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
 const cart = store.getState().product.cart
  if (action.type === ADD_TO_CART) {
    const newAction = {
      ...action,
      payload: {
        ...action.payload,
        order: cart.length+1
      }
    }
    return next(newAction)
  }
  return next(action);
}

export default cartCounter;