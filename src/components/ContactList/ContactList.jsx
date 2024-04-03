import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  if (!contacts.length) {
    return <h2>No available contacts</h2>;
  }
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact item={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
