"use strict";
// //deploy
// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config(); // Cargar las variables de entorno desde el archivo .env
// const dbPort = process.env.DB_PORT || "3001";
// const sequelize = new Sequelize({
//   dialect: "mysql",
//   host: process.env.DB_HOST || "localhost",
//   port: parseInt(dbPort),
//   username: process.env.DB_USERNAME || "root",
//   password: process.env.DB_PASSWORD || "root123",
//   database: process.env.DATABASE || "itcrowd",
// });
// export default sequelize;
//local
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});
exports.default = sequelize;
