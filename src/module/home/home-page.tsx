import React, { useEffect, useState } from "react";
import RoomAndChat from "../room/RoomAndChat";
import "./home-page.css";
import { io } from "socket.io-client";
import PlayGame from "../../module/play-game/PlayGame";
import Header from "../../layout/Header";
import { Room } from "../../core/type/Room";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  store,
} from "../../redux-toolkit/socket/SocketStore";
import {
  connectSocket,
  disconnectSocket,
} from "../../redux-toolkit/socket/SocketSlice";

interface HomeProps {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC<HomeProps> = () => {
  //https://github.com/machadop1407/react-socketio-chat-app
  const [screen, setScreen] = useState(0);
  const [listRoom, setListRoom] = useState<Room[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const socket = useSelector((state: RootState) => state.socket.socket);

  useEffect(() => {
    dispatch(connectSocket());
  }, []);

  useEffect(() => {
    console.log(socket);

    const messageListener = (data: any) => {
      console.log(data);
    };

    const listRoomListener = (data: Room[]) => {
      console.log(data);
      setListRoom(data);
    };

    socket?.on("message", messageListener);
    socket?.on("list-room", listRoomListener);
  });

  function handleScreen() {
    switch (screen) {
      case 1:
        return <PlayGame />;
      case 0:
        return (
          <>
            <Header />
            <hr />
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
                        <button onClick={() => setScreen(1)}>Play</button>
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
                <RoomAndChat listRoom={listRoom} />
              </div>
            </div>
          </>
        );
      default:
        break;
    }
  }

  return <>{handleScreen()}</>;
};

export default Home;
