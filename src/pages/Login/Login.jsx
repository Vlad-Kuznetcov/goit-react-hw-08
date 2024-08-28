import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectIsLoggenIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const Login = () => {
  const isLoggenIn = useSelector(selectIsLoggenIn);
  if (isLoggenIn) {
    return <Navigate to="/tasks" />;
  }
  return <LoginForm />;
};

export default Login;
