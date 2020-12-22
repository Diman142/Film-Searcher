import { SUBMIT_FORM } from './types'

const initialState = {
  data: [],
}


export const submitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return { ...state, data: action.payload }
    default: return state
  }
}
