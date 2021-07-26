import { GIPHY_FETCH_SEARCH } from "adapters/fetchHandlers";
import { GET_NEW_GIF } from "redux/constant";

export function getNewGIF(GIPHY_KEY, inputValue, DATA_LIMIT) {
  const config = {
    params: {
      api_key: GIPHY_KEY,
      q: inputValue,
      limit: DATA_LIMIT,
    },
  };

  return (dispatch) => {
    GIPHY_FETCH_SEARCH(config).then((res) => {
      dispatch({
        type: GET_NEW_GIF,
        payload: res.data.map((gif) => gif.images.original.url),
      });
    });
  };
}
