import { ActionTypes } from "../contants/action-types"

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
};

export const setValueQuery = (query) => {
  return {
    type: ActionTypes.SET_QUERY,
    payload: query,
  }
}
export const setCurrentPage = (page: number) => {
  return {
    type: ActionTypes.SET_CURRENT_PAGE,
    payload: page,
  }
}

export const setTotal = (total: number) => {
  return {
    type: ActionTypes.SET_TOTAL,
    payload: total,
  }
}