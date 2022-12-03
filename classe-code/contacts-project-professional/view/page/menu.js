const renderMenu = () => {
  console.clear();
  console.log("#########################");
  console.log("#### Contacts Project ###");
  console.log("#########################");
  console.log("1. Create new contact.");
  console.log("2. List all contacts.");
  console.log("3. Show contact by index.");
  console.log("4. Delete contact by index.");
  console.log("5. Update contact by index.");
  console.log("#########################");
  console.log("Tap Z to exit....");
};

export const menu = {
  renderMenu,
};
