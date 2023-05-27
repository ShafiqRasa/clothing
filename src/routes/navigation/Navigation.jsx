import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as CrownLogo } from "../../assets/icons/crown.svg";
import { UserContext } from "../../contexts/user";
import { userSignOut } from "../../utils/firebase/firebase-api.config";
import CartIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";
import { CheckoutContext } from "../../contexts/checkout";

const navs = [
  {
    id: 1,
    label: "Shop",
    href: "/shop",
  },
  {
    id: 2,
    label: "Sign in",
    href: "/auth",
  },
];
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CheckoutContext);
  const handleUserSignOut = async () => {
    await userSignOut();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className=" nav-links-container">
          <Link className=" nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className=" nav-link" onClick={handleUserSignOut}>
              Sign out
            </span>
          ) : (
            <Link className=" nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
