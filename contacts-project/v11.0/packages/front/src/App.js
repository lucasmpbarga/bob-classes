import { useEffect, useState } from "react";
import "./App.css";
import "./css/file-document.css";
import "./css/main.css";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/trash.css";
import contactService from "./service/contact-service";

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [update, setUpdate] = useState(false);

  const refresh = () => {
    setUpdate((prev) => !prev);
  };

  const handleCreate = () => {
    if (currentContact.id) {
      contactService.updateContact(currentContact.id, currentContact);
    } else {
      contactService.createContact(currentContact);
    }

    setCurrentContact({
      id: "",
      name: "",
      phone: "",
      email: "",
    });

    refresh();
  };

  const handleRead = async () => {
    const response = await contactService.readContacts();

    setContacts(response.data);
  };

  const handleUpdate = (id) => {
    const index = contacts.findIndex((el) => el.id === id);
    const contact = contacts[index];
    setCurrentContact(contact);
  };

  const handleDelete = (id) => {
    contactService.deleteContact(id);

    refresh();
  };

  useEffect(() => {
    handleRead();
  }, [update]);

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="six rows">
          <label>Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Lorem Ipsum"
            id="name-input"
            value={currentContact.name}
            onChange={(e) =>
              setCurrentContact((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="six rows">
          <label>Phone</label>
          <input
            className="u-full-width"
            type="tel"
            placeholder="(00)96666-8888"
            id="phone-input"
            value={currentContact.phone}
            onChange={(e) =>
              setCurrentContact((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
        <div className="six rows">
          <label>Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="email@email.com"
            id="email-input"
            value={currentContact.email}
            onChange={(e) =>
              setCurrentContact((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <button className="button-primary space-button" onClick={handleCreate}>
          Submit
        </button>
      </div>
      <table className="table-container">
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
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <i
                  className="gg-trash trash-icon"
                  onClick={() => handleDelete(contact.id)}
                ></i>
              </td>
              <td>
                <i
                  className="gg-file-document edit-icon"
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
