// import { useDispatch, useSelector } from "react-redux";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import { useEffect } from "react";
// import { fetchContactsThunk } from "./redux/contactsOps";
// import { selectIsError, selectIsLoading } from "./redux/selectors";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login/Login";
import Signup from "./pages/SingUp/Signup";
import NotFound from "./pages/NotFound";

function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);

  // useEffect(() => {
  //   dispatch(fetchContactsThunk());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="login" element={<Login />} />
        <Route path="singup" element={<Signup />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
