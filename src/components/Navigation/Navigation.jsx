import { NavLink } from "react-router-dom";
import AuthNav from "../Header/AuthNav";
import UserMenu from "../Header/UserMenu";
import { selectIsLoggenIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => {
  const isLoggenIn = useSelector(selectIsLoggenIn);
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink className={s.navLink} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navLink} to="/contacts">
          Contacts
        </NavLink>
      </li>
      {isLoggenIn ? <UserMenu /> : <AuthNav />}
    </ul>
  );
};

export default Navigation;
