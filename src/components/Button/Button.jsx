import "./Button.scss";

function Button({ title, ...restProps }) {
  return (
    <button className="Button" {...restProps}>
      {title}
    </button>
  );
}

export default Button;
