import "./RoomAndChat.css";
import CreateRoom from "../modal/create-room/CreateRoom";
import { Room } from "../../core/type/Room";
interface RoomAndChatProps {
  listRoom: Room[];
}
const RoomAndChat: React.FC<RoomAndChatProps> = ({ listRoom }) => {
  return (
    <div id="chat">
      <div className="chat-container">
        <div className="show-chat"></div>
        <div className="action-chat">
          <div className="input-chat">
            <input className="input-chat-field" type="text" />
          </div>

          <div className="send">
            <button className="btn-send">send</button>
          </div>
        </div>
      </div>
      <div className="list-room-container">
        <div className="title-x">
          <div>Id</div>
          <div>Name</div>
          <div>Number</div>
          <div>Type</div>
          <div>Status</div>
          <div>Clock</div>
        </div>
        {listRoom.map((room) => (
          <div className="title" key={room.roomId}>
            <div className="id-room mr-10">{room.roomId}</div>
            <div className="name-room mr-10">Trận của {room.roomOwner}</div>
            <div className="number mr-10">?</div>
            <div className="type mr-10">?</div>
            <div className="status mr-10">{room.status}</div>
            <div className="clock mr-10">{room.clock}</div>
          </div>
        ))}
      </div>

      <CreateRoom />
    </div>
  );
};

export default RoomAndChat;
