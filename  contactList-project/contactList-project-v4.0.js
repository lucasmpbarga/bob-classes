// v4
// Criar um menu NO TERMINAL com as seguintes opcoes:
// 1. Create
// 2. Read:All
// 3. Read:One
// 4. Delete
// 5. Update
// Os nome acima sao apenas exemplos.
// Criar funcionalidade capaz de pegar 1 numero digitado do teclado
// Caso o numero digitado no teclado seja o numero da opcoa ele deve imprimir,
// "Your option selected is X.", X deve representar a opcao selecionada.
// Caso seja selecionado uma opcao nao existente deve imprimir,
// "Your option selected don't exist."
// Implementar funcionalidade de fechar menu, quando digitar Z ou z.
// Recursos utilizados: require, dependencie, let, while, switch
// **************************************************

const prompt = require("prompt-sync")();

let option = "";

console.log("#######################");
console.log("#### contacts Project ###");
console.log("#######################");
console.log("1. Create new contact.");
console.log("2. List all contacts.");
console.log("3. Show one contact by index.");
console.log("4. Delete contact by index.");
console.log("5. Update contact by index.");
console.log("#######################");

while (option.toLowerCase() !== "z") {
  switch (option) {
    case "1":
      console.log("Your option selected is Create new contact.");
      break;
    case "2":
      console.log("Your option selected is List all contacts.");
      break;
    case "3":
      console.log("Your option selected is Show one contact by index.");
      break;
    case "4":
      console.log("Your option selected is Delete contact by index.");
      break;
    case "5":
      console.log("Your option selected is Update contact by index.");
      break;
    default:
      if (option !== "") {
        console.log("Your option selected don't exist.");
      }
      break;
  }

  console.log("");
  option = prompt("Select your option: ");
}
