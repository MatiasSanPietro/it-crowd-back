"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const isRailwayEnvironment = process.env.RAILWAY_ENV === "true";
const dbPort = process.env.DB_PORT || "3001";
let sequelize;
if (isRailwayEnvironment) {
    sequelize = new sequelize_1.Sequelize({
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: parseInt(dbPort, 10),
        database: process.env.DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });
}
else {
    sequelize = new sequelize_1.Sequelize({
        dialect: "mysql",
        host: process.env.DB_HOST,
        database: process.env.DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });
}
exports.default = sequelize;
// const sequelize = new Sequelize("itcrowd", "root", "root123", {
//   host: "localhost",
//   dialect: "mysql",
// });
