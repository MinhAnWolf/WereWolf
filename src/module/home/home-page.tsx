import React from "react";
import RoomAndChat from "../room/RoomAndChat";
import "./home-page.css";
import { Socket } from "socket.io-client";

interface HomeProps {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  socket: Socket;
}

const Home: React.FC<HomeProps> = ({ setScreen, socket }) => {
  //https://github.com/machadop1407/react-socketio-chat-app

  // show all room
  socket.on("list_room", (socket) => {
    console.log();
  });

  return (
    <div id="home">
      <div className="box1">
        <div className="slide-event">
          <img
            src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7oPaAG2feHBJv6JkSRdnix/821a51dd8140927e7f578adc3a5e7e10/WWW_Page_Meta_Image.jpg"
            alt=""
          />
        </div>
        <div className="play">
          <div className="rank">
            <div className="card">
              <img
                src="https://cdn.britannica.com/04/84704-050-7E762815/Basil-Rathbone-movies-Arthur-Conan-Doyle-one.jpg"
                alt="Avatar"
              />
              <div className="container">
                <button onClick={() => setScreen(2)}>Play</button>
              </div>
            </div>
          </div>
          <div className="normal">
            <div className="card">
              <img
                src="https://i.ebayimg.com/images/g/It0AAOSwBttkLWja/s-l1600.jpg"
                alt="Avatar"
              />
              <div className="container">
                <button>Play</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box2">
        <RoomAndChat />
      </div>
    </div>
  );
};

export default Home;
