import Home from './module/home/home-page';
import './App.css'
import Header from './layout/Header';
import { useReducer, useEffect, useState, } from 'react';
import PlayGame from './module/play-game/PlayGame';
import Login from './module/auth/Login';
import Register from './module/auth/Register';
import { io } from "socket.io-client";

function App() {
  const [screen, setScreen] = useState(0)
  const socket = io("http://localhost:9999");
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    
    socket.on("disconnect", () => {
      console.log(socket.id);
    });
  })

  function reHeader() {
    if (screen === 0) {
      return <Header />;
    }
  }

  function handleScreen() {
    switch (screen) {
      case 0:
        return <Home setScreen={setScreen} />
      case 1:
        return <PlayGame />
      case 2:
        return <Login />
      case 3:
        return <Register />
      default:
        break;
    }
  }

  return (
    <div id="container-screen">
      {reHeader()}
      <hr />
      {handleScreen()}
    </div>
  );
}

export default App;
