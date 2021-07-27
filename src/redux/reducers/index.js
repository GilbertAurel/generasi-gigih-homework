import { configureStore } from "@reduxjs/toolkit";
import { gifReducer } from "./gif";
import { userState } from "./user";

export default configureStore({
  reducer: {
    userState: userState,
    gifState: gifReducer,
  },
});
