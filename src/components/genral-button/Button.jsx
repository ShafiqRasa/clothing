import "./button.style.scss";

const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <button
      className={`btn-container ${BUTTON_TYPES[btnType]} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
