const scheduler = [
    {
        name: "Lukita",
        phone: "21717171717",
        email: "lukitadagalera@piraca.com",
    },
    {
        name: "Varela",
        phone: "21717171717",
        email: "Varelitadagalera@piraca.com",
    },
    {
        name: "Melynx",
        phone: "21717171717",
        email: "Melynxdagalera@piraca.com",
    },
    {
        name: "BobAP",
        phone: "21717171717",
        email: "BobAPdagalera@piraca.com",
    },
];

const menu = () => {
    console.log("///////////////////////////////");
    console.log("///////////MENU///////////////");
    console.log("///////////////////////////////");
    console.log("1. CREATE");
    console.log("2. READ ALL");
    console.log("3. READ ONE");
    console.log("4. DELETE");
    console.log("5. UPDATE");
    console.log("");
};

const printMessage = () => {
    console.log(`Your option selected is ${valueOption}`);
};

//Create Contact
const registration_scheduler = (name, phone, email) => {
    const newUser = {
        name,
        phone,
        email,
    };
    scheduler.push(newUser);
};
//Read All
const display_contacts = () => {
    console.table(scheduler);
};
//Read One
const printContact = (index) => {
    const userSelected = scheduler[index];
    console.log("**------ Contact Print ------***");
    console.log(`Name:  ${userSelected.name}`);
    console.log(`Phone: ${userSelected.phone}`);
    console.log(`Email: ${userSelected.email}`);
};
//Delete
const deleteContact = (index) => {
    scheduler.splice(index, 1);
    console.log("**---- Contact Deleted ----**");
    console.table(scheduler);
};
//Update
const updateContact = (id, attribute, value) => {
    scheduler[id][attribute] = value;
    console.table(scheduler);
};

// Import Lib Prompt for Input

let input = require("prompt-sync")();
let valueOption = "";
while (valueOption !== "z") {
    switch (valueOption) {
        case "1":
            printMessage();
            const name = input("Name : ");
            const phone = input("Phone : ");
            const email = input("Email : ");
            registration_scheduler(name, phone, email);
            console.table(scheduler);
            break;

        case "2":
            printMessage();
            display_contacts();
            break;

        case "3":
            printMessage();
            const contact = input("Which contact do you want to see by index ? : ");
            printContact(contact);
            break;

        case "4":
            printMessage();
            const contactDeleted = input(
                "Which contact do you want to delete by index ? : "
            );
            deleteContact(contactDeleted);
            break;

        case "5":
            printMessage();
            const indexUpdate = input(
                "Which contact do you want to update by index ? : "
            );
            const keyUpdate = input(
                "Which key do you want to change (name, phone or email) ? : "
            );
            const valueUpdate = input("Enter the value you want to update : ");
            updateContact(indexUpdate, keyUpdate, valueUpdate);
            break;
        default:
            if (valueOption !== "") {
                console.log("Your option selected don't exist.");
            }

            break;
    }
    menu();
    valueOption = input("Select Your Option : ").toLowerCase();
}