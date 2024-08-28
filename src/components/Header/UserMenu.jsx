import { useDispatch } from "react-redux";
import { LogoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <li>
      <button onClick={() => dispatch(LogoutThunk())}>Exit</button>
    </li>
  );
};

export default UserMenu;
