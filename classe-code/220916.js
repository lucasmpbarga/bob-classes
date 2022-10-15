const contacts = [
  { nome: "Robert", telefone: "123123", email: "robert@email.com" },
  { nome: "Lucas", telefone: "123123", email: "lucas@email.com" },
  { nome: "Varela", telefone: "123123", email: "varela@email.com" },
];

// console.log(contacts)

const contactsFormatada = contacts.map((pessoa) => pessoa.nome);

// console.log('contactsFormatada: ', contactsFormatada)

const pessoa = contactsFormatada.indexOf("Lucas");

// console.log('=>', pessoa)

const getIndexByName = (name) => {
  const contactsFormatted = contacts.map((pessoa) => pessoa.nome);

  return contactsFormatted.indexOf(name);
};

const index = getIndexByName("Lucas");

console.log("index: ", index);

// **************************************************
// **************************************************
// **************************************************

// const contacts = ["Robert", "12345678", "aaa@mail.com"];

// criar uma funcao capaz de deletar UM contato, pelo index. - splice() -  criação
const deleteUsers = (index) => {
  contacts.splice(index, 1);
};

deleteUsers(1);

// contacts.splice(1,1)
console.log(contacts);

// **************************************************
// **************************************************
// **************************************************

// * ********************************************************
// v1
// criar contacts de contatos com as seguintes funcionalidades. BLA BLA BLA OBJETIVO.
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

// const contacts = [];

const newUser = (user) => {
  return;
  contacts.push(user);
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
  console.log("listUsers:", contacts);
};

listUsers();

// criar uma funcao capaz de imprimir apenas 1 dos contatos, pelo index.
// const getContactByIndex = () => {
//     console.log(contacts[index])
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
