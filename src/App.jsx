import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactsData from "./assets/contacts.json";
import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(ContactsData);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const getFilteredContacts = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox search={search} onSearch={setSearch} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
