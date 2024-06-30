import { configureStore } from "@reduxjs/toolkit";
import socketSlice from "../socket/SocketSlice";
import getDefaultMiddleware from "@reduxjs/toolkit";
import {
  connectSocket,
  disconnectSocket,
} from "../../redux-toolkit/socket/SocketSlice";

const store = configureStore({
  reducer: {
    socket: socketSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
// store.dispatch(connectSocket());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
