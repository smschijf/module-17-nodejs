import Header from "./components/Header";
import Nav from "./components/Nav";
import users from "./assets/icons/users-icon.svg";
import { useEffect, useState } from "react";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await fetch("http://localhost:3001/rooms");
      const data = await res.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <div className="App">
      <Header title="Chatrooms" subTitle="Choose a room!" showBackButton />
      <ul className="chatrooms">
        {rooms.map((room) => {
          return <li key={room.id}>
            <p className="chatroomTitle">{room.name}</p>
            <span className="userCount">{room.userCount}</span>
            <img src={users} alt="users" />
          </li>
        })}
      </ul>
      <Nav />
    </div>
  );
};

export default Rooms;
