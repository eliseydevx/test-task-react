import "./Input.scss";

function Input({ placeholder, value, handleChange }) {
  return (
    <input
      className="Input"
      type="text"
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      value={value}
    />
  );
}

export default Input;
