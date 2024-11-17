import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function AuthBar() {
  const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <NavLink to="register" className={makeNavLinkClass}>
        register
      </NavLink>
      <NavLink to="logIn" className={makeNavLinkClass}>
        Log in
      </NavLink>
    </div>
  );
}
