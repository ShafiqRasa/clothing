import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as CrownLogo } from "../../assets/icons/crown.svg";

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
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className=" nav-links-container">
          {navs.map(({ id, label, href }) => (
            <Link key={id} className=" nav-link" to={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
