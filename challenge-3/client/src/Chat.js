import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ socket, username, room, setShowChat }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="App">
      <Header title={messageList.room} subTitle="Description" setShowChat={setShowChat} />
      {/* <div className="chatContainer"> */}
        <ScrollToBottom className="chatContainer">
        {messageList.map((messageContent, i) => {
          return (
            <div
              className="message other"
              key={i}
              id={username === messageContent.author ? "you" : "other"}
            >
              <div className="messageUser">
                <span className="statusIcon">🟢</span>
                <p className="username">{messageContent.author}</p>
              </div>
              <div className="messageContent">
                <p>{messageContent.message}</p>
              </div>
              <div className="messageMeta">
                <p>{messageContent.time}</p>
              </div>
            </div>
          );
        })}
        </ScrollToBottom>
        {/* <input
          type="text"
          placeholder="message"
        />
        <button onClick={sendMessage}>Send</button> */}
      {/* </div> */}
      <Nav textInput sendMessage={sendMessage} setCurrentMessage={setCurrentMessage} currentMessage={currentMessage} />
    </div>
  );
};

export default Chat;
