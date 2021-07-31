import { SPOTIFY_LOGIN_AUTH } from "store/constant";

const initialState = {
  token: "",
  user: {},
};

export const userReducer = (state = initialState, action) => {
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
