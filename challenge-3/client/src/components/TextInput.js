import btnSignin from "../assets/icons/btn-sign-in-icon.svg";

const TextInput = (props) => {
  return (
    <div className="textInput">
      <input
        type="text"
        id={props.name}
        name={props.name}
        placeholder={props.name}
      />
      <button>
        <img src={btnSignin} alt={props.name} />
      </button>
    </div>
  );
};

export default TextInput;
