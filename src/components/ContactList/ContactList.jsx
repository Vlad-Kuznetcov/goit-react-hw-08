import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div className={s.container}>
      {contacts.map((contacts) => (
        <Contact
          key={contacts.id}
          contact={contacts}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
