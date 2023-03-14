import messages from "../assets/icons/messages-icon.svg";
import users from "../assets/icons/users-icon.svg";
import signOut from "../assets/icons/sign-out-icon.svg";
import btnSignin from "../assets/icons/btn-sign-in-icon.svg";

const Nav = (props) => {
  if (props.navigation) {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src={messages} alt="messages" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={users} alt="users" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={signOut} alt="sign out" />
            </a>
          </li>
        </ul>
      </nav>
    );
  } else if (props.textInput) {
    return (
      <nav>
        <div className="textInput">
          <input
            type="text"
            value={props.currentMessage}
            placeholder="Type your message"
            onChange={(event) => {
              props.setCurrentMessage(event.target.value);
            }}
            onKeyDown={(event) => {
              event.key === "Enter" && props.sendMessage();
            }}
          />
          <button>
            <img src={btnSignin} alt={props.name} onClick={props.sendMessage} />
          </button>
        </div>
      </nav>
    );
  } else {
    return <nav></nav>;
  }
};

export default Nav;
