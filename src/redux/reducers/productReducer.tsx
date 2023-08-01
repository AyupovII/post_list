import { ActionTypes } from "../contants/action-types"

const initialState = {
  products: [],
  query: "",
  currentPage: 1,
  total: 0
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SET_QUERY:
      return { ...state, query: payload };
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case ActionTypes.SET_TOTAL:
      return { ...state, total: payload };
    default:
      return state;
  }

}