import Home from './module/home/home-page';
import './App.css'
import Header from './layout/Header';
import { useReducer, useEffect, useState, ReactElement, cloneElement } from 'react';
import tabReducer from './reducer/TabReducer';
import ScreenCommon from './Common/ScreenCommon';

function App() {
  const [state, dispatch] = useReducer(tabReducer, { type: 0, payload: <Home /> });
  const [changeScreen, setChangeScreen] = useState(Number);

  function getDataScreen(screen: any) {
    setChangeScreen(screen);
  }

  useEffect(() => {
    dispatch({ type: changeScreen })
  }, [changeScreen])

  return (
    <div id="container-screen">
      <Header />
      <hr />
      
      {state.payload}
    </div>
  );
}

export default App;
