import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import AuthBar from "../Auth/AuthBar";
import UserMenu from "../UserMenu/UserMenu";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.container}>
      <div>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        {isLoggedIn ? (
          <NavLink to="сontacts" className={makeNavLinkClass}>
            Contacts
          </NavLink>
        ) : (
          <></>
        )}
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthBar />}
    </div>
  );
}
