import { combineReducers } from 'redux'
import { inputReducer } from './inputReducer'
import { loadReducer } from './loadReducer'
import { submitReducer } from './appReducers'
import { alertReducer } from './alertReducer'
import { popupReducer } from './popupReducer'
import { btnReducer } from './btnReducer'
import pathReducer from './pathReducer'

export const rootReducer = combineReducers({
  inputChange: inputReducer,
  loadChange: loadReducer,
  submit: submitReducer,
  alertControl: alertReducer,
  popup: popupReducer,
  disBtn: btnReducer,
  goToPage: pathReducer
})
