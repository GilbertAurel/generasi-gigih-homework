import { configureStore } from "@reduxjs/toolkit";
import { gifReducer } from "./gif";

export default configureStore({
  reducer: {
    gifState: gifReducer,
  },
});
