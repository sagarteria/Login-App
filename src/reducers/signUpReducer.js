import { SELECTING_AVATAR, OPTION_2 } from '../constants'
const initialState = {
  avatarSelected: OPTION_2
}

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTING_AVATAR:
      return {
        ...state,
        avatarSelected: action.avatarSelected
      }
    default:
      return state
  }
}

export default signUpReducer