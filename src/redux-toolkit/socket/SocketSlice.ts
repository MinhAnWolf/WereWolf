import { createSlice } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";

interface SocketState {
  socket: Socket | null;
}

const initialState: SocketState = {
  socket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connectSocket: (state: any) => {
      state.socket = io("http://localhost:9999");
    },
    disconnectSocket: (state) => {
      state.socket?.disconnect();
    },
  },
});
const { actions, reducer } = socketSlice;
export const { connectSocket, disconnectSocket } = actions;
export default reducer;
