import { useState } from "react";
import "./CreateRoom.css";

function CreateRoom() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">Crate Room</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Create room</h2>
            <div className="container-create">
                Name room:
                <input type="text" />
                Slot:
                <input type="text" />
                <br />
                Mode play:
                <input type="text" />
                Clock:
                <input type="text" />
                <br />
                Password:
                <input type="password" />
                <br />
                <button>Create</button>
                <button>Clear</button>
            </div>
            <button className="close-modal" onClick={toggleModal}>CLOSE</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateRoom;
