import "./assets/style/sass/main.scss";
import io from "socket.io-client";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <>
          <Header title="Enter chatbox" subtitle="Test" />
          <div className="enterChatbox">
            <div className="textInput">
            <input
              type="text"
              placeholder="nickname"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            </div>
            <div className="textInput">
            <input
              type="text"
              placeholder="room ID"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            </div>
            <button onClick={joinRoom}>
              <span>Enter Chatbox</span>
            </button>
            <div className="chatInformation">
              <p>
                Here’s some information about this chat. Could be anything
                actually. Like, it’s soo cool! Oh my god, it’s amazing! Nothing
                beats this chat. Like, you can talk and other people talk back
                at ya!
              </p>
            </div>
          </div>
          <Nav />
        </>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
