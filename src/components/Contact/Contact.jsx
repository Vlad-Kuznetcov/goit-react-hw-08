import s from "../Contact/Contact.module.css";
import { GoPersonFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, handleDeleteContact }) => {
  return (
    <div className={s.container}>
      <GoPersonFill />
      <h3 className={s.name}>{contact.name}</h3>
      <FaPhoneAlt />
      <p className={s.number}>{contact.number}</p>
      <button className={s.btn} onClick={() => handleDeleteContact(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
