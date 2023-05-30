import { BaseBtn, GoogleSignIn, Inverted } from "./button.style";

export const BUTTON_TYPES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getBtn = (btnType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseBtn,
    [BUTTON_TYPES.google]: GoogleSignIn,
    [BUTTON_TYPES.inverted]: Inverted,
  }[btnType]);
const Button = ({ children, btnType, ...otherProps }) => {
  const CustomeButton = getBtn(btnType);

  return <CustomeButton {...otherProps}>{children}</CustomeButton>;
};

export default Button;
