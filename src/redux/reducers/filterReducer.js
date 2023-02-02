import { CLEAR_FILTER, TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

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
      const brandExist = state.filter.brand.includes(action.payload);
      if (brandExist) {
        return {
          ...state,
          filter: {
            ...state.filter,
            brand: state.filter.brand.filter(brand => brand !== action.payload)
          }
        }
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          brand: [...state.filter.brand, action.payload]
        }
      }

    case CLEAR_FILTER:
      return {
        ...state,
        filter: {
          brand: [],
          stock: false
        }
      }

    default:
      return state;
  }
}
export default filterReducer;