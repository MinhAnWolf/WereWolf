import "./RoomAndChat.css";
import CreateRoom from "../modal/create-room/CreateRoom";

function RoomAndChat() {
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
        <div className="title">
          <div>
            Id
            <div className="id-room mr-10">#114141</div>
            <div className="id-room mr-10">#114141</div>
          </div>
          <div>
            Name
            <div className="name-room mr-10">Trận của ak</div>
            <div className="name-room mr-10">Trận của rolbina</div>
          </div>
          <div>
            Number
            <div className="number mr-10">5/10</div>
            <div className="number mr-10">10/10</div>
          </div>
          <div>
            Type
            <div className="type mr-10">Ranked</div>
            <div className="type mr-10">Normal</div>
          </div>
          <div>
            Status
            <div className="status mr-10">Watting</div>
            <div className="status mr-10">Start</div>
          </div>
          <div>
            Clock
            <div className="clock mr-10">True</div>
            <div className="clock mr-10">False</div>
          </div>
        </div>
      </div>
      <CreateRoom />
    </div>
  );
}

export default RoomAndChat;
