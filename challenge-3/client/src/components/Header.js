import hamburger from "../assets/icons/hamburger-icon.svg";
// import back from "../assets/icons/back-btn.svg";
import { useState } from "react";
import rooms from "../assets/icons/messages-icon-white.svg";
import users from "../assets/icons/users-icon-white.svg";
import signOut from "../assets/icons/sign-out-icon-white.svg";

const Header = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
        <button id="toggleMenu" onClick={() => setToggle(!toggle)}>
          <img src={hamburger} alt="open menu" />
        </button>
      </header>
      {/* <Menu /> */}
      <div className={`menu ${toggle ? "showMenu" : ""}`}>
        <div className="menuRow">
          <p>ROOMS</p>
          <img src={rooms} alt="rooms"></img>
        </div>
        <div className="menuRow">
          <p>USERS</p>
          <img src={users} alt="rooms"></img>
        </div>
        <div className="menuRow">
          <p>QUIT</p>
          <img src={signOut} alt="rooms"></img>
        </div>
      </div>
    </>
  );
};

export default Header;
