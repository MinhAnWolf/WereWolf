import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import Cookies from "cookies-ts";
const cookies = new Cookies();

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
    connectSocket: (state: any) => {
      state.socket = io("http://localhost:9999", {
        auth: {
          access: cookies.get("access"),
          refresh: cookies.get("refresh"),
        },
        extraHeaders: {
          userid: localStorage.getItem("uid") as string,
        },
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
