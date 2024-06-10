import Home from './module/home/home-page';
import './App.css'
import Header from './layout/Header';
import { useReducer, useEffect, useState, } from 'react';
import Room from './module/room/Room';
import PlayGame from './module/play-game/PlayGame';

function App() {
  const [screen, setScreen] = useState(0)

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
        return <Room/>
      case 2:
          return <PlayGame/>
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
