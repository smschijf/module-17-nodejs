import hamburger from "../assets/icons/hamburger-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import rooms from "../assets/icons/messages-icon-white.svg";
import users from "../assets/icons/users-icon-white.svg";
import signOut from "../assets/icons/sign-out-icon-white.svg";
import backBtn from "../assets/icons/back-btn.svg";

const Header = (props) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <button id="toggleMenu" onClick={() => setToggle(!toggle)}>
          <img src={hamburger} alt="open menu" />
        </button>
        {!props.showBackButton ? (
          <></>
        ) : (
          <button
            onClick={() => {
              window.localStorage.setItem('showChat', true)
              navigate("/");
            }}
          >
            <img src={backBtn} alt="go back"></img>
          </button>
        )}
      </header>
      {/* <Menu /> */}
      <div className={`menu ${toggle ? "showMenu" : ""}`}>
        <div
          className="menuRow"
          onClick={() => navigate("/rooms", { state: { room: "roomTest" } })}
        >
          <p>ROOMS</p>
          <img src={rooms} alt="rooms"></img>
        </div>
        <div className="menuRow">
          <p>USERS</p>
          <img src={users} alt="rooms"></img>
        </div>
        <div className="menuRow" onClick={() => {window.localStorage.setItem('showChat', false); navigate("/")}}>
          <p>QUIT</p>
          <img src={signOut} alt="rooms"></img>
        </div>
      </div>
    </>
  );
};

export default Header;
