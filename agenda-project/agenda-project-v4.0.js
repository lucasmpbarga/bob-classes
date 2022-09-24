// v4
// Criar um menu com pelo menos 1 opcao
// Criar uma funcionalidade capaz de pegar 1 numero digitado do teclado
// Caso o numero digitado no teclado seja o numero da opcoa ele deve imprimir,
// "Your option selected is X.", X deve ser o numero da opcao.
// Caso seja selecionado uma opcao nao existente deve imprimir,
// "Your option selected don't exist."
// Implementar funcionalidade de fechar menu, quando digitar Z ou z.
// Extra: Criar X opcoes no menu.
// 1. Create
// 2. Read:All
// 3. Read:One
// 4. Delete
// 5. Update
// Os nome acima sao apenas exemplos.
// **************************************************

const prompt = require("prompt-sync")();

let option = "";

console.log("#######################");
console.log("#### Agenda Project ###");
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
      console.log("Your option selected is 1.");
      console.log("");
      break;
    case "2":
      console.log("Your option selected is 2.");
      console.log("");
      break;
    case "3":
      console.log("Your option selected is 3.");
      console.log("");
      break;
    case "4":
      console.log("Your option selected is 4.");
      console.log("");
      break;
    case "5":
      console.log("Your option selected is 5.");
      console.log("");
      break;
    default:
      console.log("Your option selected don't exist.");
      console.log("");
      break;
  }

  option = prompt("Select your option: ");
}
