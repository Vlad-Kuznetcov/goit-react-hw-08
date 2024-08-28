import { useSelector } from "react-redux";
import SignupForm from "../../components/SingupForm/SingupForm";
import { selectIsLoggenIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const isLoggenIn = useSelector(selectIsLoggenIn);
  if (isLoggenIn) {
    return <Navigate to="/tasks" />;
  }
  return <SignupForm />;
};

export default Signup;
