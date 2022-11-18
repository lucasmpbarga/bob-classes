import { useState } from "react";
import "./App.css";
import "./css/file-document.css";
import "./css/main.css";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/trash.css";

const initialContacts = [
  {
    id: 1,
    name: "First Contact",
    phone: "111-111-111",
    email: "first_contact@email.com",
  },
  {
    id: 2,
    name: "First Silva",
    phone: "111-111-111",
    email: "first_silva@email.com",
  },
  {
    id: 3,
    name: "Second Contact",
    phone: "222-222-222",
    email: "second_contact@email.com",
  },
  {
    id: 4,
    name: "Second Silva",
    phone: "111-111-111",
    email: "second_silva@email.com",
  },
  {
    id: 5,
    name: "Third Contact",
    phone: "333-333-333",
    email: "third_contact@email.com",
  },
  {
    id: 6,
    name: "Third Silva",
    phone: "111-111-111",
    email: "third_silva@email.com",
  },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [currentContact, setCurrentContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = () => {
    setContacts((prev) => [...prev, ...[currentContact]]);
    setCurrentContact({
      name: "",
      phone: "",
      email: "",
    });
  };

  const handleDelete = (id) => {
    const newContacts = contacts;
    const index = newContacts.findIndex((el) => el.id === id);
    newContacts.splice(index, 1);
    console.log(newContacts);
    setContacts([...newContacts]);
  };

  const handleUpdate = (id) => {
    const index = contacts.findIndex((el) => el.id === id);
    const contact = contacts[index];
    setCurrentContact(contact);
    handleDelete(contact.id);
  };

  return (
    <div class="main-container">
      <div class="form-container">
        <div class="six rows">
          <label for="name-input">Name</label>
          <input
            class="u-full-width"
            type="text"
            placeholder="Lorem Ipsum"
            id="name-input"
            value={currentContact.name}
            onChange={(e) =>
              setCurrentContact((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div class="six rows">
          <label for="phone-input">Phone</label>
          <input
            class="u-full-width"
            type="tel"
            placeholder="(00)96666-8888"
            id="phone-input"
            value={currentContact.phone}
            onChange={(e) =>
              setCurrentContact((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
        <div class="six rows">
          <label for="email-input">Email</label>
          <input
            class="u-full-width"
            type="email"
            placeholder="email@email.com"
            id="email-input"
            value={currentContact.email}
            onChange={(e) =>
              setCurrentContact((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <button class="button-primary space-button" onClick={handleSubmit}>
          Submittt
        </button>
      </div>
      <table class="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <i
                  class="gg-trash trash-icon"
                  onClick={() => handleDelete(contact.id)}
                ></i>
              </td>
              <td>
                <i
                  class="gg-file-document edit-icon"
                  onClick={() => handleUpdate(contact.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
