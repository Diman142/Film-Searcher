import { SET_PAGEPATH, RESET_PAGEPATH } from './types'

const initialState = {
  path: ""
}


const pathReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_PAGEPATH:
      return { ...state, path: action.payload }
    case RESET_PAGEPATH:
      return { ...state, path: action.payload }
    default: return state
  }
}


export default pathReducer
