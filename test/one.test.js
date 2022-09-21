const test = require("node:test");
const assert = require("node:assert");
const { listProducts } = require("../src/model/products.js");

test("listProducts() returns all products", () => {
  const products = listProducts();
  assert.equal(
    products.length,
    77,
    `received ${products.length} products, expected 77`
  );
  const product = products[0];
  const expected = {
    id: 1,
    name: "Chai",
    quantity_per_unit: "10 boxes x 20 bags",
    unit_price: 18,
    units_in_stock: 39,
    units_on_order: 0,
  };
  assert.deepEqual(product, expected);
});
