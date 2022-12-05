import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002",
  timeout: 1000,
});

const createContact = (contact) => {
  instance.post("/contacts", contact);
};

const readContacts = () => {
  return instance.get("/contacts");
};

const updateContact = (id, contact) => {
  instance.put(`/contacts/${id}`, contact);
};

const deleteContact = (contactId) => {
  instance.delete(`/contacts/${contactId}`);
};

export default {
  createContact,
  readContacts,
  updateContact,
  deleteContact,
};
