-- {
-- 	"id": 24,
-- 	"name": "Update Contact",
-- 	"phone": "111-111-111",
-- 	"email": "second_silva@email.com"
-- }

-- STRUCTURE
CREATE DATABASE contact_db;

DROP TABLE contact;

CREATE TABLE contact(
   contact_id BIGSERIAL PRIMARY KEY,
   name VARCHAR(125) NOT NULL,
   phone VARCHAR(125) NOT NULL,
   email VARCHAR(50) NOT NULL
);

-- CREATE
INSERT INTO
   contact(name, phone, email)
VALUES
('Create', '111', 'create@email.com');

INSERT INTO
   contact(name, phone, email)
VALUES
('Read', '222', 'read@email.com');

INSERT INTO
   contact(name, phone, email)
VALUES
('Update', '333', 'update@email.com');


INSERT INTO
   contact(name, phone, email)
VALUES
('Delete', '444', 'delete@email.com');

INSERT INTO
   contact(name, phone, email)
VALUES
('Delete Me', '555', 'deleteme@email.com');

-- READ
SELECT * FROM contact c
ORDER BY c.name DESC;

-- UPDATE
UPDATE contact
SET name = 'Updated'
WHERE contact_id = 3;

SELECT * FROM contact c
ORDER BY c.contact_id ASC;

--  DELETE
DELETE FROM contact c
WHERE c.contact_id = 5;

SELECT * FROM contact c
ORDER BY c.contact_id ASC;

