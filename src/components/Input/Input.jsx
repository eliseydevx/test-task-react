import "./Input.scss";

function Input({ placeholder, value, handleChange }) {
  return (
    <input
      className="Input"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}

export default Input;
