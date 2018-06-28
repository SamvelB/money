import { SET_ITEMS } from '../utils/constants'

const initialState = []

const items = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload }

    default:
      return state;
  }

}

export default items