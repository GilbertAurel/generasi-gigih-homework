import { GET_NEW_GIF, GIPHY_GET_TRENDING } from 'store/constant';

const initialState = {
  currentGIF: [],
  trending: [],
};

export const gifReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_GIF:
      return {
        ...state,
        currentGIF: action.payload,
      };
    case GIPHY_GET_TRENDING:
      return {
        ...state,
        trending: action.payload,
      };
    default:
      return state;
  }
};
