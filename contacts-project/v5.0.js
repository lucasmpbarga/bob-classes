// v5
// integrar o menu feito na v4 com as
// funcionalidades desenvolvidas nas versoes 1,2,3
// implementar de forma que um usuario possa utilizar os recursos

const prompt = require("prompt-sync")();

const contacts = [
  {
    name: "First Contact",
    phone: "111-111-111",
    email: "first_contact@email.com",
  },
  {
    name: "Second Contact",
    phone: "222-222-222",
    email: "second_contact@email.com",
  },
  {
    name: "Third Contact",
    phone: "333-333-333",
    email: "third_contact@email.com",
  },
];

let option = "";

const spaceLine = () => {
  console.log("");
};

const saveNewContact = (newContact) => {
  contacts.push(newContact);
  spaceLine();
  console.log("***The contact has been saved successfully***");
};

const listContacts = () => {
  console.table(contacts);
};

const showContactWithMessage = (contact, message) => {
  console.log("Name:", contact.name);
  console.log("Phone:", contact.phone);
  console.log("Email:", contact.email);

  if (message) {
    spaceLine();
    console.log(message);
  }
};

const printOneContact = (index) => {
  spaceLine();
  showContactWithMessage(contacts[index]);
};

const removeContactByIndex = (index) => {
  const contact = contacts[index];
  spaceLine();
  showContactWithMessage(
    contact,
    "***The contact has been deleted successfully***"
  );
  contacts.splice(index, 1);
};

const updateContact = (index, attribute, newValue) => {
  const contact = contacts[index];
  spaceLine();
  showContactWithMessage(contact, "The contact has been updated to...");
  contact[attribute] = newValue;
  spaceLine();
  showContactWithMessage(contact);
};

const renderMenu = () => {
  console.clear();
  console.log("#########################");
  console.log("#### Contacts Project ###");
  console.log("#########################");
  console.log("1. Create new contact.");
  console.log("2. List all contacts.");
  console.log("3. Filter by name.");
  console.log("4. Delete contact by index.");
  console.log("5. Update contact by index.");
  console.log("#########################");
  console.log("Tap Z to exit....");
  spaceLine();
  option = prompt("Select your option: ");
};

const tapAnyToContinue = () => {
  spaceLine();
  prompt("tap any key to continue...");
};

renderMenu();

while (option.toLowerCase() !== "z") {
  switch (option) {
    case "1":
      const newUser = {};

      spaceLine();

      newUser.name = prompt("Name: ");
      newUser.phone = prompt("Phone: ");
      newUser.email = prompt("Email: ");

      saveNewContact(newUser);
      tapAnyToContinue();
      break;
    case "2":
      spaceLine();
      listContacts();
      tapAnyToContinue();
      break;
    case "3":
      spaceLine();

      const printContactId = prompt("Contact Index: ");

      printOneContact(printContactId);
      tapAnyToContinue();
      break;
    case "4":
      spaceLine();

      const removeContactId = prompt("Contact Index: ");

      removeContactByIndex(removeContactId);
      tapAnyToContinue();
      break;
    case "5":
      spaceLine();
      const updateContactId = prompt("Contact Index: ");

      spaceLine();
      let attribute = prompt(
        "Which attribute do you want to change tap [name, phone, email]:"
      );

      while (!["name", "phone", "email"].includes(attribute)) {
        if (attribute.toLowerCase() === "z") {
          break;
        }

        spaceLine();
        console.log("***Please insert valid attribute***");
        spaceLine();
        attribute = prompt(
          "Which attribute do you want to change tap [name, phone, email]:"
        );
      }

      if (attribute.toLowerCase() === "z") {
        break;
      }

      spaceLine();
      const newValue = prompt("New value: ");

      updateContact(updateContactId, attribute, newValue);
      tapAnyToContinue();
      break;
    default:
      if (option !== "") {
        console.log("Your option selected don't exist.");
      }
      break;
  }

  renderMenu();
}
