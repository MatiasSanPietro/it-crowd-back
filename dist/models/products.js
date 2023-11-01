"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const brands_1 = require("./brands");
exports.Product = connection_1.default.define("product", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
    },
    brandId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
});
// association
exports.Product.belongsTo(brands_1.Brand, {
    foreignKey: "brandId",
    onDelete: "CASCADE",
});
