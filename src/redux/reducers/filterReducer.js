import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

const initialState = {
  filter: {
    brand: [],
    stock: false
  },
  keyword: "",

}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STOCK:
      return {
        ...state,
        filter: {
          ...state.filter,
          stock: !state.filter.stock
        }
      }
    case TOGGLE_BRAND:
      return {
        ...state,
        filter: {
          ...state.filter,
          brand: [...state.filter.brand, action.payload]
        }
      }
    default:
      return state;
  }
}
export default filterReducer;