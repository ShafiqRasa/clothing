import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/icons/crown.svg";
import { userSignOut } from "../../utils/firebase/firebase-api.config";
import CartIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation-route.styles";

// const navs = [
//   {
//     id: 1,
//     label: "Shop",
//     href: "/shop",
//   },
//   {
//     id: 2,
//     label: "Sign in",
//     href: "/auth",
//   },
// ];
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isOpen } = useSelector(cartSelector);
  const handleUserSignOut = async () => {
    await userSignOut();
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={handleUserSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
