"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const router = (0, express_1.Router)();
router.get("/", products_1.getProducts);
router.get("/:id", products_1.getProductsById);
router.post("/", products_1.createProduct);
router.put("/:id", products_1.updateProduct);
router.delete("/:id", products_1.deleteProduct);
exports.default = router;
// http://localhost:3001/api/products/ http://localhost:3001/api/products/?name= http://localhost:3001/api/products/?description=
