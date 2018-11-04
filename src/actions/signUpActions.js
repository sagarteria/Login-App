import { SELECTING_AVATAR } from '../constants'

export const avatarSelect = (avatarSelected) => {
  return {
    type: SELECTING_AVATAR,
    avatarSelected,
  }
}
