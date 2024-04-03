import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactsData from "./assets/contacts.json";
import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(ContactsData);

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
