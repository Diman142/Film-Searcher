import axios from 'axios'
import { CHANHE_INPUT_VALUE, SUBMIT_FORM, SHOW_LOAD, HIDE_LOAD, HIDE_ALERT, SHOW_ALERT, SHOW_POPUP, HIDE_POPUP, DISABLE_BTN, ENABLE_BTN, RESET_PAGEPATH, SET_PAGEPATH } from './types'

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


export function setPath(data) {

  return dispatch => {
    dispatch({
      type: SET_PAGEPATH,
      payload: data
    })
  }
}


export function resetPath() {
  return dispatch => {
    dispatch({
      type: RESET_PAGEPATH,
      payload: ""
    })
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
      dispatch({ type: SUBMIT_FORM, payload: [] })
      dispatch(disBtn())
      dispatch(showLoader())

      const response = await axios.get(`https://imdb-api.com/en/API/Search/k_vjpsmwej/${searchKey}`)

      const requests = []

      response.data.results.forEach((movie, index) => {
        if (index < 1) {
          requests.push(axios.get(`https://imdb-api.com/en/API/Title/k_vjpsmwej/${movie.id}`))
        }
      })

      const allresp = await axios.all(requests)

      const filmsData = []

      allresp.forEach(item => {


        // eslint-disable-next-line prefer-const
        let obj = {
          id: item.data.id,
          title: item.data.title,
          year: item.data.year,
          award: item.data.awards,
          genre: item.data.genreList[0].value,
          ratio: item.data.imDbRating,
          type: item.data.type,
          poster: item.data.image
        }

        filmsData.push(obj)


        obj = {}
      })

      dispatch({ type: SUBMIT_FORM, payload: filmsData })
      dispatch(createRequest(''))
      dispatch(enBtn())
      dispatch(hideLoader())
    } catch {
      dispatch(enBtn())
      dispatch(showAlert())
      dispatch(hideLoader())
    }
  }
}
