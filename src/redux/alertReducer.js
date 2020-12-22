import { SHOW_ALERT, HIDE_ALERT } from './types'

const initialState = {
  isAlert: false
}

export const alertReducer = (state = initialState, action) => {


  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, isAlert: true }
    case HIDE_ALERT:
      return { ...state, isAlert: false }
    default: return state
  }
}
