import { GET_NEW_GIF } from "redux/constant";

const initialState = {
  currentGIF: [],
};

export const gifReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_GIF:
      return {
        ...state,
        currentGIF: action.payload,
      };

    default:
      return state;
  }
};
