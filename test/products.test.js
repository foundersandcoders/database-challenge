const test = require("node:test");
const assert = require("node:assert");
const model = require("../model/products.js");

test("listProducts() returns all products", () => {
  const products = model.listProducts();
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
    stock_value: 18 * 39,
    units_on_order: 0,
  };
  assert.deepEqual(product, expected);
});

test("searchProducts can match a single product", () => {
  const products = model.searchProducts("chai");
  assert.equal(
    products.length,
    1,
    `received ${products.length} products, expected 1`
  );
  const expected = {
    id: 1,
    name: "Chai",
  };
  assert.deepEqual(products[0], expected);
});

test("searchProducts can match many products", async (t) => {
  const products = model.searchProducts("ch");
  assert.equal(
    products.length,
    14,
    `received ${products.length} products, expected 6`
  );
  const expected = {
    id: 19,
    name: "Teatime Chocolate Biscuits",
  };
  assert.deepEqual(products[5], expected);
});
