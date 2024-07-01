import { useEffect, useState } from "react";
import { User } from "../../core/type/User";
import "./PlayGame.css";
import { Socket } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux-toolkit/socket/SocketStore";
import {
  connectSocket,
  disconnectSocket,
} from "../../redux-toolkit/socket/SocketSlice";
interface PlayGameProps {}

const PlayGame: React.FC<PlayGameProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const socket = useSelector((state: RootState) => state.socket.socket);

  useEffect(() => {
    dispatch(connectSocket());
  }, []);

  useEffect(() => {
    console.log("effect play game", socket);

    const messageListener = (data: any) => {
      console.log(data);
    };

    const listRoomListener = (data: any) => {
      console.log(data);
    };

    socket?.on("message", messageListener);
    socket?.on("list-room", listRoomListener);
    socket?.on("message-private", (data: any) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="play-game-container">
      <div className="player">
        <div className="thecard">
          <div className="thefront">
            <img
              src="https://storage.prompt-hunt.workers.dev/clf2x74do000djz08a0bb6fg1_1"
              alt=""
            />
          </div>

          <div className="theback">
            <img
              src="https://xuyenthan.wordpress.com/wp-content/uploads/2018/12/yr2ilgj-imgur.png"
              alt=""
            />
          </div>
        </div>

        <div className="thecard">
          <div className="thefront">
            <img
              src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1"
              alt=""
            />
          </div>

          <div className="theback">
            <img
              src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png"
              alt=""
            />
          </div>
        </div>

        <div className="thecard">
          <div className="thefront">
            <img
              src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1"
              alt=""
            />
          </div>

          <div className="theback">
            <img
              src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png"
              alt=""
            />
          </div>
        </div>

        <div className="thecard">
          <div className="thefront">
            <img
              src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1"
              alt=""
            />
          </div>

          <div className="theback">
            <img
              src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png"
              alt=""
            />
          </div>
        </div>

        <div className="thecard">
          <div className="thefront">
            <img
              src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1"
              alt=""
            />
          </div>

          <div className="theback">
            <img
              src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png"
              alt=""
            />
          </div>
        </div>

        <div className="thecard">
          <div className="thefront">
            <img
              src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1"
              alt=""
            />
          </div>

          <div className="theback">
            <img
              src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png"
              alt=""
            />
          </div>
        </div>

        <div className="thecard">
          <div className="thefront">
            <img
              src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1"
              alt=""
            />
          </div>

          <div className="theback">
            <img
              src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="manager-play">
        <div className="vertical-line"></div>
        <div className="container-time">
          <div className="time">
            <h3>30s</h3>
          </div>

          <div className="sun-night">
            <img
              src="https://hoangphucphoto.com/wp-content/uploads/2023/05/anh-dct-1.jpg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="box-chat">
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
