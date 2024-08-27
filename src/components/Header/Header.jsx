import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";
import GuestBar from "./GuestBar";

const Header = () => {
  return (
    <header>
      <h2>Auth</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={s.navLink} to="/tasks">
            Tasks
          </NavLink>
        </li>
        <GuestBar />
      </ul>
    </header>
  );
};

export default Header;
