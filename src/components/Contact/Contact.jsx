import s from "../Contact/Contact.module.css";
import { GoPersonFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.container}>
      <GoPersonFill />
      <h3 className={s.name}>{contact.name}</h3>
      <FaPhoneAlt />
      <p className={s.number}>{contact.number}</p>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContactThunk(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
