import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css";
import { selectContacts, selectFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={s.container}>
      {filteredData.map((contacts) => (
        <Contact
          key={contacts.id}
          contact={contacts}
          // handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
