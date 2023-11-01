import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbPort = process.env.DB_PORT || "3001";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "root123",
  port: parseInt(dbPort, 10),
});

export default sequelize;

// const sequelize = new Sequelize("itcrowd", "root", "root123", {
//   host: "localhost",
//   dialect: "mysql",
// });
