import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

function App() {
  // function App() {
  //   const [catch, setContacts] = useState(() => {
  //     try {
  //       const storedContacts = window.localStorage.getItem("contactList");
  //       return storedContacts ? JSON.parse(storedContacts) : initialValues;
  //     } catch (e) {
  //       console.error("Error parsing localStorage data:", e);
  //       return initialValues;
  //     }
  //   });

  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    return savedContacts !== null && savedContacts.length !== 0
      ? savedContacts
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleAddContact = (contact) => {
    setContacts((prev) => [
      ...prev,
      {
        ...contact,
        id: nanoid(),
      },
    ]);
  };

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox searchName={searchName} setSearchName={setSearchName} />
      <ContactList
        contacts={filteredData}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
