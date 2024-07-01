import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { access } from "fs";
import { io, Socket } from "socket.io-client";

interface SocketState {
  socket: Socket | null;
}

interface AuthSocket {
  auth: {
    access: string;
    refresh: string;
  };
  headers: {
    [key: string]: string;
  };
}

const initialState: SocketState = {
  socket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connectSocket: (state: any, action: PayloadAction<AuthSocket>) => {
      const { auth, headers } = action.payload;
      state.socket = io("http://localhost:9999", {
        auth: {
          access: auth.access,
          refresh: auth.refresh,
        },
        extraHeaders: headers,
      });
    },
    disconnectSocket: (state) => {
      state.socket?.disconnect();
    },
  },
});
const { actions, reducer } = socketSlice;
export const { connectSocket, disconnectSocket } = actions;
export default reducer;
