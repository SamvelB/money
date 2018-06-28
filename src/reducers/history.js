import { SET_HISTORY } from '../utils/constants'

const initialState = []

const history = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return { ...state, history: action.payload }

    default:
      return state;
  }

}

export default history