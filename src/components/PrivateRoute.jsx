import { useSelector } from "react-redux";
import { selectIsLoggenIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggenIn = useSelector(selectIsLoggenIn);

  return isLoggenIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
