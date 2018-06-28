import { SET_CURRENT_DAY, SET_ITEMS, SET_HISTORY } from '../utils/constants'

const setCurrentDay = (currentDay) => {
  return {
    type: SET_CURRENT_DAY,
    payload: currentDay
  }
}

const setItems = (items) => {
  return {
    type: SET_ITEMS,
    payload: items
  }
}

const setHistory = (history) => {
  return {
    type: SET_HISTORY,
    payload: history
  }
}

export { setCurrentDay, setItems, setHistory }