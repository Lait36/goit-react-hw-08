import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={css.container}>
      <div>
        <NavLink to="/">Home</NavLink>
        <button>Contacts</button>
      </div>
      <div>
        <button>register</button>
        <button>Log in</button>
      </div>
    </div>
  );
}
