import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";

const GuestBar = () => {
  return (
    <>
      <li>
        <NavLink className={s.navLink} to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navLink} to="/singup">
          SingUp
        </NavLink>
      </li>
    </>
  );
};

export default GuestBar;
