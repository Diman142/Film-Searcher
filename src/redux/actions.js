import { CHANHE_INPUT_VALUE, SUBMIT_FORM, SHOW_LOAD, HIDE_LOAD, HIDE_ALERT, SHOW_ALERT, SHOW_POPUP, HIDE_POPUP, DISABLE_BTN, ENABLE_BTN } from './types'

// Action creators/ In last actioncreator I used redu thunk for async operations
// Film Database is OMDb with open API

export function createRequest(text) {

  return {
    type: CHANHE_INPUT_VALUE,
    payload: text
  }
}


export function showLoader() {
  return {
    type: SHOW_LOAD
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOAD
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function showAlert() {
  return {
    type: SHOW_ALERT
  }
}


function showPopup() {
  return {
    type: SHOW_POPUP
  }
}

function hideopup() {
  return {
    type: HIDE_POPUP
  }
}

function disBtn() {
  return {
    type: DISABLE_BTN
  }
}

function enBtn() {
  return {
    type: ENABLE_BTN
  }
}

export function submitRequest(searchKey) {

  return async dispatch => {
    try {
      if (searchKey.length <= 0) {
        dispatch(showPopup())
        setTimeout(() => {
          dispatch(hideopup())
        }, 1500)
        return
      }
      dispatch(disBtn())
      dispatch(showLoader())
      const response = await fetch(`https://www.omdbapi.com/?s=${searchKey}&apikey=1934074`)
      const json = await response.json()
      dispatch({ type: SUBMIT_FORM, payload: json.Search })
      dispatch(createRequest(''))
      dispatch(enBtn())
      dispatch(hideLoader())
    } catch {
      dispatch(showAlert())
      dispatch(hideLoader())
    }
  }
}
