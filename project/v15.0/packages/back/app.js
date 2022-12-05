import cors from "cors";
import express, { json } from "express";
import pkg from "pg";

const app = express();
const hostname = "localhost";
const port = 3002;

const pool = new pkg.Pool({
  user: "root",
  host: "localhost",
  database: "contact_db",
  password: "root",
  port: 5432,
});

app.use(cors());

app.use(json());

app.get("/contacts", (req, res) => {
  pool.query(
    "SELECT * FROM contact c ORDER BY c.contact_id ASC;",
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).send(results.rows);
    }
  );
});

app.post("/contacts", function (req, res) {
  const contact = {
    id: Math.floor(Math.random() * 100),
    ...req.body,
  };

  pool.query(
    `INSERT INTO contact(name, phone, email) VALUES ('${contact.name}', '${contact.phone}', '${contact.email}');`,
    (error) => {
      if (error) {
        throw error;
      }

      res.sendStatus(200);
    }
  );
});

app.put("/contacts/:id", function (req, res) {
  const { id } = req.params;
  const parsedId = parseInt(id);

  const contact = {
    id: parsedId,
    ...req.body,
  };

  pool.query(
    `UPDATE contact SET 
    name = '${contact.name}',
    phone = '${contact.phone}', 
    email = '${contact.email}' 
    WHERE contact_id = ${contact.id};`,
    (error) => {
      if (error) {
        throw error;
      }

      res.sendStatus(200);
    }
  );
});

app.delete("/contacts/:id", function (req, res) {
  const { id } = req.params;
  const parsedId = parseInt(id);

  pool.query(
    `DELETE FROM contact c
    WHERE c.contact_id = ${parsedId};`,
    (error) => {
      if (error) {
        throw error;
      }

      res.sendStatus(200);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port http://${hostname}:${port}/`);
});
