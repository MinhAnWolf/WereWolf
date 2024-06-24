import Home from "./module/home/home-page";
import "./App.css";
import Header from "./layout/Header";
import { useEffect, useState } from "react";
import PlayGame from "./module/play-game/PlayGame";
import Login from "./module/auth/Login";
import Register from "./module/auth/Register";
import axios from "axios";
import { requestInterceptor } from "./interceptor/Interceptors";

function App() {
  const [screen, setScreen] = useState(0);

  function reHeader() {
    if (screen === 0) {
      return <Header />;
    }
  }

  function handleScreen() {
    switch (screen) {
      case 0:
        return <Home setScreen={setScreen} />;
      case 1:
        return <PlayGame />;
      case 2:
        return <Login />;
      case 3:
        return <Register />;
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
