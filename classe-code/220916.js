const agenda = [
  { nome: "Robert", telefone: "123123", email: "robert@email.com" },
  { nome: "Lucas", telefone: "123123", email: "lucas@email.com" },
  { nome: "Varela", telefone: "123123", email: "varela@email.com" },
];

// console.log(agenda)

const agendaFormatada = agenda.map((pessoa) => pessoa.nome);

// console.log('agendaFormatada: ', agendaFormatada)

const pessoa = agendaFormatada.indexOf("Lucas");

// console.log('=>', pessoa)

const getIndexByName = (name) => {
  const agendaFormatted = agenda.map((pessoa) => pessoa.nome);

  return agendaFormatted.indexOf(name);
};

const index = getIndexByName("Lucas");

console.log("index: ", index);

// **************************************************
// **************************************************
// **************************************************

// const agenda = ["Robert", "12345678", "aaa@mail.com"];

// criar uma funcao capaz de deletar UM contato, pelo index. - splice() -  criação
const deleteUsers = (index) => {
  agenda.splice(index, 1);
};

deleteUsers(1);

// agenda.splice(1,1)
console.log(agenda);

// **************************************************
// **************************************************
// **************************************************

// * ********************************************************
// v1
// criar agenda de contatos com as seguintes funcionalidades. BLA BLA BLA OBJETIVO.
// cadastrar um contato e exibir todos os contatos.
// os contatos devem ter nome, telefone e email.
// salvar pelo menos 3 contatos e imprimir a lista
// * ********************************************************

// * ********************************************************
// v2
// criar uma funcao capaz de imprimir apenas 1 dos contatos, pelo index. - indexOf - criaçao
// criar uma funcao capaz de deletar um contato, pelo index. - splice() -  criação
// imprimir apenas 1 dos contatos, usando a funcao criada. - indexOf -  utilização
// deletar esse contato usando a funcao criada pelo index. - splice () - utilização
// imprimir todos os contatos e verificar se foi removido. - ?
// Read:One and Delete
// * ********************************************************

// const agenda = [];

const newUser = (user) => {
  return;
  agenda.push(user);
};

newUser([(nameUser = "Robert"), (tel = "12345678"), (email = "aaa@mail.com")]);

newUser({
  nameUser: "Lucas",
  tel: "12344678",
  email: "abc@mai.com",
});

newUser({
  nameUser: "Pretinha",
  tel: "78974566",
  email: "abc@mai.com",
});

const listUsers = () => {
  console.log("listUsers:", agenda);
};

listUsers();

// criar uma funcao capaz de imprimir apenas 1 dos contatos, pelo index.
// const getContactByIndex = () => {
//     console.log(agenda[index])
// }

// getContactByIndex(1)
// getContactByIndex(2)

// **************************************************
// **************************************************
// **************************************************

const myFunc01 = () => {
  return "xablau";
};

const myReturn1 = myFunc01();

console.log("myReturn1: ", myReturn1);

//

const myFunc02 = () => {
  return;

  return "xablau";
};

const myReturn2 = myFunc02();

console.log("myReturn2: ", myReturn2);

//

// const a = [(nameUser = "Robert"), (tel = "12345678"), (email = "aaa@mail.com")];

// const b = ["Robert", "12345678", "aaa@mail.com"];

// const c = {
//   nameUser: "Robert",
//   tel: "12345678",
//   email: "aaa@mail.com",
// };

// console.log(a);
// console.log(b);
// console.log(c);
