const database = "lorem";
const nDatabase = database.toLowerCase();

const input = "Lor";
const nInput = input.toLowerCase();
const quantityOfLetters = nInput.length;

const nDatabaseFormatted = database.slice(0, quantityOfLetters);

if (nDatabaseFormatted === nInput) {
  console.log("=>", database);
} else {
  console.log("nothing...");
}
