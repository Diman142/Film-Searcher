import { CHANHE_INPUT_VALUE } from './types'


const initialState = {
  text: ""
}

export const inputReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANHE_INPUT_VALUE:
      return { ...state, text: action.payload }
    default: return state
  }
}
