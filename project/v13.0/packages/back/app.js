const express = require("express");
const cors = require("cors");
const orderBy = require("lodash.orderby");

const app = express();
const hostname = "localhost";
const port = 3002;

const contacts = [
  {
    id: 1,
    name: "First Contact",
    phone: "111-111-111",
    email: "first_contact@email.com",
  },
  {
    id: 2,
    name: "First Silva",
    phone: "111-111-111",
    email: "first_silva@email.com",
  },
  {
    id: 3,
    name: "Second Contact",
    phone: "222-222-222",
    email: "second_contact@email.com",
  },
  {
    id: 4,
    name: "Second Silva",
    phone: "111-111-111",
    email: "second_silva@email.com",
  },
  {
    id: 5,
    name: "Third Contact",
    phone: "333-333-333",
    email: "third_contact@email.com",
  },
  {
    id: 6,
    name: "Third Silva",
    phone: "111-111-111",
    email: "third_silva@email.com",
  },
  {
    name: "Create",
    phone: "111",
    email: "create@email.com",
    id: 7,
  },
  {
    name: "Read",
    phone: "222",
    email: "read@email.com",
    id: 8,
  },
  {
    id: 9,
    name: "Update",
    phone: "333",
    email: "update@email.com",
  },
  {
    id: 10,
    name: "Delete",
    phone: "444",
    email: "delete@email.com",
  },
];

app.use(cors());

app.use(express.json());

app.get("/contacts", (req, res) => {
  const orderedContacts = orderBy(contacts, ["id"]);
  res.send(orderedContacts);
});

app.post("/contacts", function (req, res) {
  const contact = {
    id: Math.floor(Math.random() * 100),
    ...req.body,
  };

  contacts.push(contact);

  res.send(contact);
});

app.put("/contacts/:id", function (req, res) {
  const { id } = req.params;
  const parsedId = parseInt(id);

  console.log(req.body);

  const contact = {
    id: parsedId,
    ...req.body,
  };

  const index = contacts.findIndex((contact) => contact.id === parsedId);

  if (index > -1) {
    contacts.splice(index, 1);
    contacts.push(contact);
  }

  res.send(contact);
});

app.delete("/contacts/:id", function (req, res) {
  const { id } = req.params;
  const parsedId = parseInt(id);

  const index = contacts.findIndex((contact) => contact.id === parsedId);

  if (index > -1) {
    contacts.splice(index, 1);
  }

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://${hostname}:${port}/`);
});
