import { configureStore } from '@reduxjs/toolkit';
import { gifReducer } from './gif';
import { userReducer } from './user';
import { playlistReducer } from './playlist';

export default configureStore({
  reducer: {
    userState: userReducer,
    gifState: gifReducer,
    playlistState: playlistReducer,
  },
});
