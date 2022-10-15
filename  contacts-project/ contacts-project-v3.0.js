// **************************************************
// v1
// criar contacts de contatos com as seguintes funcionalidades.
// criar uma funcao capaz de cadastrar um contato,
// os contatos devem ter: nome, telefone e email.
// criar uma funcao capaz de exibir todos os contatos
// salvar pelo menos 3 contatos e imprimir a lista.
// Create and Read:All
// **************************************************
// v2
// criar uma funcao capaz de imprimir apenas 1 dos contatos, pelo index.
// criar uma funcao capaz de deletar um contato, pelo index.
// imprimir apenas 1 dos contatos, usando a funcao criada.
// deletar esse contato usandoa  funcao criada pelo index.
// imprimir todos os contatos e verificar se foi removido.
// Read:One and Delete
// **************************************************
// v3
// criar uma funcao capaz de atualizar a informacoes de um contato,
// passando: index, atributo (que sera alterado) e o novo valor.
// imprimir todos os contatos e verificar se foi alterado.
// Update
// **************************************************

// v1 *********************************************************
// criando um array para armazenar meus contatos.
const contacts = [];

//  criando uma funcao que insere um novo contato na contacts (no array contacts).
const saveNewContact = (newContact) => {
  contacts.push(newContact);
};

// salvando 10 contatos
for (i = 0; i < 10; i++) {
  saveNewContact({
    id: i,
    name: `nome-${i}`,
    phone: `${i}${i}${i}`,
    email: `email${i}@email.com`,
  });
}

// criando uma funcao que lista todos os contatos.
const listContacts = () => {
  console.log(contacts);
};

// executando funcao que lista os contatos.
listContacts();
// v1 *********************************************************

// v2 *********************************************************
// printa usuario pelo index.
const printOneContact = (index) => {
  console.log("===REMOVED===", contacts[index]);
};

// remove usuario do array pelo index.
const removeContactByIndex = (index) => {
  contacts.splice(index, 1);
};

// printando apenas 1 contato pelo seu index.
printOneContact(3);

// removendo 1 contato pelo seu index.
removeContactByIndex(3);

// listando todos os contatos.
listContacts();
// v2 *********************************************************

// v3 *********************************************************
// atualiza o contato pelo index passando o atributo que sera alterado e o novo valor.
const updateContact = ({ index, attribute, newValue }) => {
  const contact = contacts[index];
  contact[attribute] = newValue;
  console.log("===UPDATED===", contact);
};

// atualizando contato pelo index passando o atributo e o novo valor.
updateContact({ index: 2, attribute: "name", newValue: "nome-x" });
updateContact({ index: 2, attribute: "phone", newValue: "YYY" });
updateContact({ index: 0, attribute: "phone", newValue: "XXX" });
updateContact({ index: 1, attribute: "email", newValue: "e@email.com" });

// listando todos os contatos.
listContacts();
// v3 *********************************************************
