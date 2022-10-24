const answer = require("prompt-sync")({ sigint: true });

const contacts = [
  {
    id: "1",
    nameUser: "Robert",
    email: "mail@mail.com",
    tel: "(11)1111-1111",
  },
  {
    id: "2",
    nameUser: "Varela",
    email: "mail@mail.com",
    tel: "(11)1111-1111",
  },
  {
    id: "3",
    nameUser: "Lukita",
    email: "mail@mail.com",
    tel: "(11)1111-1111",
  },
  {
    id: "4",
    nameUser: "Rosana",
    email: "mail@mail.com",
    tel: "(11)1111-1111",
  },
  {
    id: "5",
    nameUser: "Vania",
    email: "mail@mail.com",
    tel: "(11)1111-1111",
  },
  {
    id: "6",
    nameUser: "Luciana",
    email: "mail@mail.com",
    tel: "(11)1111-1111",
  },
];
const endApp = "x";

const statement = "statament";

const clear = () => {
  console.clear();
};

const spaceline = () => {
  console.log("");
};

const mainMenu = () => {
  clear();
  spaceline();
  console.log("-----------------------------");
  console.log("    SELECT ONE OPTION");
  console.log("  1 -     CREATE");
  console.log("  2 -     READ ONE");
  console.log("  3 -     READ ALL");
  console.log("  4 -     SEARCH BY NAME");
  console.log("  5 -     UPDATE");
  console.log("  6 -     DELETE");
  console.log("-----------------------------");
  spaceline();
  selectedOption = answer('Select Your Option or "x" to close ');
  spaceline();
};

const keyToContinue = () => {
  spaceline();
  answer("Press enter to continue!");
  spaceline();
};

const newUser = (newUser) => {
  contacts.push(newUser);
};

const selectOne = (index) => {
  const contactReceived = contacts[index];
  spaceline();
  console.log(`ID: ${contactReceived.id}`);
  console.log(`Name: ${contactReceived.nameUser}`);
  console.log(`Email: ${contactReceived.email}`);
  console.log(`Tel: ${contactReceived.tel}`);
  spaceline();
};

const listIds = () => {
  console.table(contacts);
};

const findName = () => {
  const search = findName.includes(`${search}`);
};

const updateId = (index, attribute, value) => {
  contacts[index][attribute] = value;
  console.table(contacts);
};

const removeContact = (index) => {
  contacts.splice(index, 1);
  console.table(contacts);
};

let selectedOption = "";

mainMenu();

while (selectedOption.toLowerCase() !== "x") {
  switch (selectedOption) {
    case "1":
      clear();
      console.log("You selected Create New User");
      spaceline();
      const id = answer("Id: ");
      const nameUser = answer("Name: ");
      const email = answer("E-mail: ");
      const tel = answer("Tel: ");
      newUser({
        id: id,
        nameUser: nameUser,
        email: email,
        tel: tel,
      });
      //   console.table(contacts)
      keyToContinue();
      break;

    case "2":
      clear();
      console.log("You selected Read One User");
      spaceline();
      const one = answer("Selec user by index: ");
      selectOne(one);
      keyToContinue();
      break;

    case "3":
      clear();
      console.log("You Selected Read All");
      spaceline();
      listIds();
      keyToContinue();
      break;

    case "4":
      clear();

      console.table(contacts);

      console.log("You Selected Search By Name");

      spaceline();

      const nameRecieved = answer(
        "Enter the full or partial name you want to search:  "
      );

      const nameFiltered = contacts.filter((contact) => {
        const normalizedContact = contact.nameUser.toLowerCase();
        const normalizedNameRecieved = nameRecieved.toLowerCase();

        // return contact.nameUser.toLowerCase().includes(nameRecieved.toLowerCase());
        return normalizedContact.includes(normalizedNameRecieved);
      });

      if (nameFiltered.length > 0) {
        console.table(nameFiltered);
      }

      if (nameFiltered.length === 0) {
        console.log("This Name Doesn't Exist!");
      }

      // if (nameFiltered.length > 0) {
      //   console.table(nameFiltered);
      // } else {
      //   console.log("This Name Doesn't Exist!");
      // }

      // console.table(nameFiltered);

      spaceline();

      keyToContinue();

      break;

    case "5":
      clear();
      console.log("You Selected Update");
      spaceline();
      const indexInput = answer("Type the index do you want change:  ");
      const attributeInput = answer(
        "Type the key do you want change(id - nameUser - email - tel): "
      );
      const valueInput = answer("The value do you want change: ");
      updateId(indexInput, attributeInput, valueInput);
      keyToContinue();
      break;

    case "6":
      clear();
      console.log("You Selected Delete");
      spaceline();
      const deleteId = answer("What id do you want delete by id: ");
      removeContact(deleteId);
      keyToContinue();
      break;

    default:
      if (selectedOption !== "") {
        console.log("Your option selected don't exist.");
        keyToContinue();
        break;
      }
  }
  mainMenu();
}
