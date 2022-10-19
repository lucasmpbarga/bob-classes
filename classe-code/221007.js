const productStock = [
  {
    barcode: 4454671,
    name: "Pencil",
    description: "Used to draw",
    amount: 2000,
    category: "School supplies",
  },
  {
    barcode: 2511561,
    name: "Pen",
    description: "Used to sing",
    amount: 3000,
    category: "School supplies",
  },
  {
    barcode: 3454564,
    name: "Sharpener",
    description: "used to sharpen pencils",
    amount: 400,
    category: "School supplies",
  },
  {
    barcode: 6789997,
    name: "Paper",
    description: "Used for printing, painting and signatures",
    amount: 10000,
    category: "School supplies",
  },
];

const registerNewProduct = (newProduct) => {
  productStock.push(newProduct);
};
// Create Products in array
registerNewProduct({
  barcode: 1589593,
  name: "Eraser",
  description: "User for eraser",
  amount: 50,
  category: "School supplies",
});
registerNewProduct({
  barcode: 8514516,
  name: "Folder",
  description: "Used to store documents",
  amount: 70,
  category: "School supplies",
});
registerNewProduct({
  barcode: 9645821,
  name: "Schedule",
  description: "Used to make appointments",
  amount: 60,
  category: "School supplies",
});

//Delete Product by index
const deleteProduct = (index) => {
  productStock.splice(index, 1);
};

// Listen products in tables
const listAllProduct = () => {
  console.log("******************************************************");
  console.log("**********LIST OF ALL STATIONERY PRODUCTS*************");
  console.log("******************************************************");
  console.table(productStock);
};
//Listem products in descriptions
const listProductbyName = (inputname) => {
  console.log("******************************************************");
  console.log("*********DESCRIPTION OF THE SELECTED PRODUCT**********");
  console.log("******************************************************");
  console.table(
    productStock.find((nameProduct) => nameProduct.name === inputname)
  );
};

// JUNIOR JS
// const updateProduct = (id, attribute, value) => {
//   productStock[id][attribute] = value;
// };

// PLENO JS
// const updateProduct = (id, newProduct) => {
//   let oldProduct = productStock[id];

//   if (oldProduct != newProduct) {
//     const attribute = Object.keys(newProduct)[0];
//     const value = Object.values(newProduct)[0];

//     productStock[id][attribute] = value;
//   }
// };

// SENIOR JS
const updateProduct = (id, newProduct) => {
  let oldProduct = productStock[id];

  if (oldProduct != newProduct) {
    const product = {
      ...oldProduct,
      ...newProduct,
    };

    productStock[id] = product;
  }
};

deleteProduct(1);

// updateProduct(0, "name", "New Name");
// updateProduct(1, "description", "New Description");

updateProduct(0, {
  name: "New Name",
  description: "New Description",
});

listAllProduct();
// listProductbyName("Pencil");
