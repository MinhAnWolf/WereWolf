import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { requestInterceptor } from "./interceptor/Interceptors";
import Login from "./module/auth/Login";
import Home from "./module/home/home-page";
import Register from "./module/auth/Register";

function App() {
  const [screen, setScreen] = useState(0);

  // useEffect(() => {
  //   const getAuth = localStorage.getItem("uid");
  //   if (getAuth !== null || getAuth !== undefined) {
  //     setAuth(true);
  //   }

  //   const interceptor = axios.interceptors.request.use(
  //     requestInterceptor,
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   // Cleanup interceptor on component unmount
  //   return () => {
  //     axios.interceptors.request.eject(interceptor);
  //   };
  // }, []);

  // axios.interceptors.request.use(requestInterceptor, (error) => {
  //   console.log(error);
  // });
  function handleScreen() {
    switch (screen) {
      case 0:
        return <Login setScreen={setScreen} />;
      case 1:
        return <Register setScreen={setScreen} />;
      case 2:
        return <Home setScreen={setScreen} />;
      default:
        break;
    }
  }

  return <div id="container-screen">{handleScreen()}</div>;
}

export default App;
