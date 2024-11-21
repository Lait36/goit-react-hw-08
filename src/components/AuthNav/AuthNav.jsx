import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
export default function AuthBar() {
  const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <NavLink to="register" className={makeNavLinkClass}>register</NavLink>
      <NavLink to="login" className={makeNavLinkClass}>Log in</NavLink>
    </div>
  );
}
