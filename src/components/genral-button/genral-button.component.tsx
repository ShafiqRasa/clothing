import { FC, ButtonHTMLAttributes } from "react";
import { BaseBtn, GoogleSignIn, Inverted } from "./genral-button.style";

export enum BUTTON_TYPES {
  base = "base",
  google = "google",
  inverted = "inverted",
}
export type ButtonProps = {
  btnType?: BUTTON_TYPES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getBtn = (btnType = BUTTON_TYPES.base): typeof BaseBtn =>
  ({
    [BUTTON_TYPES.base]: BaseBtn,
    [BUTTON_TYPES.google]: GoogleSignIn,
    [BUTTON_TYPES.inverted]: Inverted,
  }[btnType]);
const Button: FC<ButtonProps> = ({ children, btnType, ...otherProps }) => {
  const CustomeButton = getBtn(btnType);

  return <CustomeButton {...otherProps}>{children}</CustomeButton>;
};

export default Button;
