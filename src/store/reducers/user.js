import { SPOTIFY_LOGIN_AUTH } from 'store/constant';

const initialState = {
  token: '',
  expiry: '',
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPOTIFY_LOGIN_AUTH:
      return {
        ...state,
        token: action.payload.token,
        expiry: action.payload.expires_in,
        user: action.payload.user,
      };

    default:
      return state;
  }
};
