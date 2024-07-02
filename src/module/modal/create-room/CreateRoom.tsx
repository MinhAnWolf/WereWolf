import { useEffect, useState } from "react";
import "./CreateRoom.css";
import { connectSocket } from "../../../redux-toolkit/socket/SocketSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
} from "../../../redux-toolkit/socket/SocketStore";
import { Room } from "../../../type/Room";
import { useForm } from "react-hook-form";
interface CreateRoomProps {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  setDataReqJoinRoom: React.Dispatch<React.SetStateAction<string>>;
}

const CreateRoom: React.FC<CreateRoomProps> = ({
  setScreen,
  setDataReqJoinRoom,
}) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const socket = useSelector((state: RootState) => state.socket.socket);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toggleModal = () => {
    setModal(!modal);
  };

  function createRoom(data: any) {
    // create room not yet validation input :))))
    socket?.emit("create-room", {
      userid: [localStorage.getItem("uid") as string],
      roomName: data.roomName,
      roomOwner: localStorage.getItem("username") as string,
      slot: 1,
      type: data.type,
      status: "open",
      clock: false,
      stage: "wait",
    });

    socket?.on("create-room", (data: any) => {
      setDataReqJoinRoom(data);
    });

    setScreen(1);
  }

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Crate Room
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <form onSubmit={handleSubmit((data) => createRoom(data))}>
            <div className="modal-content">
              <h2>Create room</h2>
              <div className="container-create">
                Name room:
                <input {...register("roomName")} type="text" />
                Slot:
                <input {...register("slot")} type="text" />
                <br />
                Mode play:
                <input {...register("type")} type="text" />
                Clock:
                <input {...register("clock")} type="text" />
                <br />
                Password:
                <input {...register("password")} type="password" />
                <br />
                <button>Create</button>
                {/* <button>Clear</button> */}
              </div>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateRoom;
