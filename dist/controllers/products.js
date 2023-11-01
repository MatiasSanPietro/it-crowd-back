"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductsById = exports.getProducts = void 0;
const products_1 = require("../models/products");
const sequelize_1 = require("sequelize");
const brands_1 = require("../models/brands");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.query;
        const filterOptions = {
            where: {},
            include: [brands_1.Brand],
        };
        if (name) {
            filterOptions.where.name = { [sequelize_1.Op.like]: `%${name}%` };
        }
        if (description) {
            filterOptions.where.description = { [sequelize_1.Op.like]: `%${description}%` };
        }
        const listProducts = yield products_1.Product.findAll(filterOptions);
        res.json(listProducts);
    }
    catch (error) {
        res.status(500).json({ error: "Error when obtaining products" });
    }
});
exports.getProducts = getProducts;
const getProductsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    try {
        const product = yield products_1.Product.findByPk(productId);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
        }
        else {
            res.json(product);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error when obtaining the product" });
    }
});
exports.getProductsById = getProductsById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, image_url, price, brandId } = req.body;
    try {
        const newProduct = yield products_1.Product.create({
            name,
            description,
            image_url,
            price,
            brandId,
        });
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(400).json({ error: "Error when creating new product" });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    const { name, description, image_url, price } = req.body;
    try {
        const product = yield products_1.Product.findByPk(productId);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
        }
        else {
            yield product.update({ name, description, image_url, price });
            res.json(product);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error when updating the product" });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    try {
        const product = yield products_1.Product.findByPk(productId);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
        }
        else {
            yield product.destroy();
            res.json({ message: "Product deleted successfully" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error when deleting the product" });
    }
});
exports.deleteProduct = deleteProduct;
