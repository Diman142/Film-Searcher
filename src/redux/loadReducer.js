import { SHOW_LOAD, HIDE_LOAD } from './types'

const initialState = {
  loading: false
}


export const loadReducer = (state = initialState, action) => {

  switch (action.type) {
    case SHOW_LOAD:
      return { ...state, loading: true }
    case HIDE_LOAD:
      return { ...state, loading: false }
    default: return state
  }
}
