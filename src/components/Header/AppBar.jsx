import { useSelector } from "react-redux";
import { selectIsLoggenIn, selectUser } from "../../redux/auth/selectors";

import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  const isLoggenIn = useSelector(selectIsLoggenIn);
  const user = useSelector(selectUser);

  return (
    <header>
      <Navigation />
      {isLoggenIn && (
        <h3>
          UserName:
          {user.name}
        </h3>
      )}
    </header>
  );
};

export default AppBar;
