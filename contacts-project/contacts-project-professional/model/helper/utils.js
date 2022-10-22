const spaceLine = () => {
  console.log("");
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

const tapAnyToContinue = ({ spaceLine, input }) => {
  return () => {
    spaceLine();
    input("tap any key to continue...");
  };
};

const showLog = (content) => {
  console.log(content);
};

const showTable = (content) => {
  console.table(content);
};

export const utils = {
  spaceLine,
  showContactWithMessage,
  tapAnyToContinue,
  showLog,
  showTable,
};
