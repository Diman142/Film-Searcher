import { DISABLE_BTN, ENABLE_BTN } from './types'

const initialState = {
  disabled: false
}

export const btnReducer = (state = initialState, action) => {

  switch (action.type) {
    case DISABLE_BTN:
      return { ...state, disabled: true }
    case ENABLE_BTN:
      return { ...state, disabled: false }
    default: return state
  }
}
