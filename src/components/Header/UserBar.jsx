import { useDispatch } from "react-redux";
import { LogoutThunk } from "../../redux/auth/operations";

const UserBar = () => {
  const dispatch = useDispatch();
  return (
    <li>
      <button onClick={() => dispatch(LogoutThunk())}>Exit</button>
    </li>
  );
};

export default UserBar;
