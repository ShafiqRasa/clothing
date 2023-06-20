import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/icons/crown.svg";
import CartIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
import {
  NavigationContainer,
  LogoConainer,
  NavLinkContainer,
  NavLink,
} from "./navigation.styles";
import { signOutUser } from "../../store/user/actions";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isOpen } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const handleUserSignOut = () => dispatch(signOutUser());
  return (
    <Fragment>
      <NavigationContainer>
        <LogoConainer to="/">
          <CrownLogo />
        </LogoConainer>
        <NavLinkContainer>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={handleUserSignOut}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
