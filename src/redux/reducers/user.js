import { SPOTIFY_LOGIN_AUTH } from "redux/constant";

const initialState = {
  token: "",
  user: {},
};

export const userState = (state = initialState, action) => {
  switch (action.type) {
    case SPOTIFY_LOGIN_AUTH:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

    default:
      return state;
  }
};