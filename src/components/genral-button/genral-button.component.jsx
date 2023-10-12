import { BaseBtn, ButtonSpinner, GoogleSignIn, Inverted } from "./button.style";

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
const Button = ({ children, btnType, isLoading = false, ...otherProps }) => {
  const CustomeButton = getBtn(btnType);

  return (
    <CustomeButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomeButton>
  );
};

export default Button;
