import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";
import GuestBar from "./GuestBar";
import { useSelector } from "react-redux";
import { selectIsLoggenIn, selectUser } from "../../redux/auth/selectors";
import UserBar from "./UserBar";

const Header = () => {
  const isLoggenIn = useSelector(selectIsLoggenIn);
  const user = useSelector(selectUser);

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
        {isLoggenIn ? <UserBar /> : <GuestBar />}
      </ul>
      {isLoggenIn && (
        <h3>
          UserName:
          {user.name}
        </h3>
      )}
    </header>
  );
};

export default Header;
