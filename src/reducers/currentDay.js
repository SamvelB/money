import { SET_CURRENT_DAY } from '../utils/constants'

const initialState = {}

const currentDay = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_DAY:
      return { ...state, currentDay: action.payload }

    default:
      return state;
  }

}

export default currentDay