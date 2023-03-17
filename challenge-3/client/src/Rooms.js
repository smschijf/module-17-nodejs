import Header from "./components/Header";
import Nav from "./components/Nav";
import users from "./assets/icons/users-icon.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Rooms = () => {
  const location = useLocation();
  const [rooms, setRooms] = useState();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await fetch("http://localhost:3001/rooms");
      const data = await res.json();
      console.log(data);
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <div className="App">
      <Header title="Chatrooms" subTitle="Choose a room!" showBackButton />
      <ul className="chatrooms">
        <li>
          <p className="chatroomTitle">{location.state.room}</p>
          <span className="userCount">14</span>
          <img src={users} alt="users" />
          <p className="chatroomDescription">Description</p>
        </li>
        {/* {rooms.map((room) => {
          return <li key={room.id}>{room.name}</li>
        })} */}
      </ul>
      <Nav />
    </div>
  );
};

export default Rooms;
