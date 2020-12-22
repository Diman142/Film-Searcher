import { SHOW_POPUP, HIDE_POPUP } from './types'

const initialState = {
  isPopup: false
}

export const popupReducer = (state = initialState, action) => {

  switch (action.type) {
    case SHOW_POPUP:
      return { ...state, isPopup: true }
    case HIDE_POPUP:
      return { ...state, isPopup: false }
    default: return state
  }
}
