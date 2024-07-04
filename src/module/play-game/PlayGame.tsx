import { useEffect, useState } from "react";
import { User } from "../../core/type/User";
import "./PlayGame.css";
import { Socket } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux-toolkit/socket/SocketStore";
import { Room } from "../../type/Room";
import { Player } from "../../type/Player";
import { connectSocket } from "../../redux-toolkit/socket/SocketSlice";
interface PlayGameProps {
  dataReqJoinRoom: string;
}

const PlayGame: React.FC<PlayGameProps> = ({ dataReqJoinRoom }) => {
  const dispatch = useDispatch<AppDispatch>();
  const socket = useSelector((state: RootState) => state.socket.socket);
  const [player, setPlayer] = useState<Player>();

  // useEffect(() => {
  //   dispatch(connectSocket());
  //   console.log(socket);
  // }, []);

  useEffect(() => {
    switch (action) {
      case "create":
        break;
      case "join":
        break;

      default:
        break;
    }
    console.log("run play game ui", dataReqJoinRoom);

    socket?.emit("join-room", {
      roomId: dataReqJoinRoom,
    });

    socket?.on("message-room", (data: any) => {
      console.log(data);
      setPlayer(data.data);
    });
  }, [dataReqJoinRoom]);

  return (
    <div className="play-game-container">
      <div className="player">
        <div className="thecard">
          <div className="thefront">
            <img src={player?.avartar} alt="" />
          </div>

          <div className="theback">
            <img
              src="https://xuyenthan.wordpress.com/wp-content/uploads/2018/12/yr2ilgj-imgur.png"
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
