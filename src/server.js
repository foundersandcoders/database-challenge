const express = require("express");
const products = require("./routes/products.js");
const product = require("./routes/product.js");
const search = require("./routes/search.js");
const add = require("./routes/add.js");

const server = express();

server.get("/", products.get);
server.get("/product/:id", product.get);
server.get("/search", search.get);
server.get("/new", add.get);
server.post("/new", express.urlencoded({ extended: false }), add.post);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
