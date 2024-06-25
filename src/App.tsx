import Home from "./module/home/home-page";
import "./App.css";
import Header from "./layout/Header";
import { useEffect, useState } from "react";
import PlayGame from "./module/play-game/PlayGame";
import Login from "./module/auth/Login";
import Register from "./module/auth/Register";
import axios from "axios";
import { requestInterceptor } from "./interceptor/Interceptors";
import { io } from "socket.io-client";
const socket = io("http://localhost:9999");

function App() {
  const [screen, setScreen] = useState(2);

  function reHeader() {
    if (screen === 0) {
      return <Header />;
    }
  }

  if (localStorage.getItem("uid")) {
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }

  function handleScreen() {
    switch (screen) {
      case 0:
        return <Home setScreen={setScreen} socket={socket} />;
      case 1:
        return <PlayGame socket={socket} />;
      case 2:
        return <Login setScreen={setScreen} />;
      case 3:
        return <Register setScreen={setScreen} />;
      default:
        break;
    }
  }

  axios.interceptors.request.use(requestInterceptor, (error) => {
    console.log(error);
  });

  return (
    <div id="container-screen">
      {reHeader()}
      <hr />
      {handleScreen()}
    </div>
  );
}

export default App;
