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
}

const CreateRoom: React.FC<CreateRoomProps> = ({ setScreen }) => {
  const [modal, setModal] = useState(false);
  const [room, setRoom] = useState<Room | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const socket = useSelector((state: RootState) => state.socket.socket);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(connectSocket());
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  async function createRoom(data: any) {
    // create room not yet validation input :))))
    let crateRoomData: Room = {
      userid: [localStorage.getItem("uid") as string],
      roomName: data.roomName,
      roomOwner: localStorage.getItem("username") as string,
      slot: 1,
      type: "normal",
      status: "open",
      clock: false,
      stage: "wait",
    };
    await setRoom(crateRoomData);
    socket?.emit("create-room", room);
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
                <button onClick={createRoom}>Create</button>
                <button>Clear</button>
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
