import { useSelector } from "react-redux";
import { selectIsLoggenIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
};

export default PublicRoute;
