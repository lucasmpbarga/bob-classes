// **************************************************
// v1
// cadastrar um contato e exibir todos os contatos.
// os contatos devem ter nome, telefone e email.
// salvar pelo menos 3 contatos e imprimir a lista
// **************************************************
// v2
// criar uma funcao capaz de imprimir apenas 1 dos contatos
// criar uma funcao capaz de deletar um contato
// criar uma funcao capaz de atualizar um contato
// **************************************************

// preciso de um lugar para SALVAR meus dados "contatos"
// nesse caso com javascript SO CONSIGO COM ARRAY
// nesse caro o array seria como um BANCO DE DADOS
const contacts = [];

// precisa de uma funcao que seja capaz de receber e salvar um contato
// no meu BANCO DE DADOS.
// nesse caso CRIEI uma funcao que RECEBE um NOVO CONTATO COMO PARAMETRO
// e INSERE o mesmo no meu BANCO DE DADOS
const saveNewContact = (newContact) => {
  contacts.push(newContact);
};

// salvando 10 contatos
for (i = 0; i < 10; i++) {
  saveNewContact({
    id: i,
    nome: `nome-${i}`,
    telefone: `${i}${i}${i}`,
    email: `email${i}@email.com`,
  });
}

// criando uma funcao que lista todos os contatos
const listContacts = () => {
  console.log(contacts);
};

// executando funcao que lista os contatos
listContacts();
