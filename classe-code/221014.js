// v4
// Criar um menu NO TERMINAL com as seguintes opcoes:
// 1. Create
// 2. Read:All
// 3. Read:One
// 4. Delete
// 5. Update
// Os nome acima sao apenas exemplos.
// Criar funcionalidade capaz de pegar 1 numero digitado do teclado
// Caso o numero digitado no teclado seja o numero da opcao ele deve imprimir,
// "Your option selected is X.", X deve representar a opcao selecionada.
// Caso seja selecionado uma opcao nao existente deve imprimir,
// "Your option selected don't exist."
// Implementar funcionalidade de fechar menu, quando digitar Z ou z.
// Recursos utilizados: require, dependencie, let, while, switch
// **************************************************

const answer = require("prompt-sync")({ sigint: true });

const options = [
  "Create",
  "Read:All",
  "Read:One",
  "Update",
  "Delete",
  "z - Exit",
];

console.log("*** Choice one option ***");
console.table(options);
console.log("**************************");

const endApp = "z";
const firstOption = "*";

let selectOption = firstOption;

while (selectOption.toLowerCase() !== endApp) {
  switch (selectOption) {
    case "0":
      console.log("Your option selected is Create");
      break;
    case "1":
      console.log("Your option selected is Read:All");
      break;
    case "2":
      console.log("Your option selected is Read:One");
      break;
    case "3":
      console.log("Your option selected is Update");
      break;
    case "4":
      console.log("Your option selected is Delete");
      break;
    default:
      if (selectOption !== firstOption) {
        console.log("Your option selected don't exist.");
      }
  }

  selectOption = answer("Select one Option by Number, or 'z' to end: ");
}
