const database = [
  {
    name: "First Contact",
    phone: "111-111-111",
    email: "first_contact@email.com",
  },
  {
    name: "First Silva",
    phone: "111-111-111",
    email: "first_silva@email.com",
  },
  {
    name: "Second Contact",
    phone: "222-222-222",
    email: "second_contact@email.com",
  },
  {
    name: "Second Silva",
    phone: "111-111-111",
    email: "second_silva@email.com",
  },
  {
    name: "Third Contact",
    phone: "333-333-333",
    email: "third_contact@email.com",
  },
  {
    name: "Third Silva",
    phone: "111-111-111",
    email: "third_silva@email.com",
  },
];

const input = "First Si";

const result = database.filter((data) => {
  const nName = data.name.toLowerCase();
  const nInput = input.toLowerCase();
  const quantityOfLetters = nInput.length;

  const nNameFormatted = nName.slice(0, quantityOfLetters);

  if (nNameFormatted === nInput) {
    return data;
  }
});

if (result.length > 0) {
  console.table(result);
} else {
  console.log("nothing...");
}
