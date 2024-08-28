import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsError, selectIsLoading } from "../redux/contacts/selectors";
import { fetchContactsThunk } from "../redux/contacts/operations";
import { selectIsLoggenIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const Tasks = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const isLoggenIn = useSelector(selectIsLoggenIn);
  if (!isLoggenIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error :c</h2>}
    </div>
  );
};

export default Tasks;
