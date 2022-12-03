import { contactStore } from "../store/contact-store.js";

const saveNewContact = (newContact) => {
  contactStore.push(newContact);
};

const getAllContacts = () => {
  return contactStore;
};

const getContactByIndex = (showContactIndex) => {
  return contactStore[showContactIndex];
};

const removeContactByIndex = (removeContactIndex) => {
  const contact = contactStore[removeContactIndex];

  contactStore.splice(removeContactIndex, 1);

  return contact;
};

const updateContact = (index, attribute, newValue) => {
  const oldContact = { ...contactStore[index] };
  const currentContact = contactStore[index];
  currentContact[attribute] = newValue;

  return {
    oldContact,
    newContact: currentContact,
  };
};

export const contactService = {
  saveNewContact,
  getAllContacts,
  getContactByIndex,
  removeContactByIndex,
  updateContact,
};
