import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

export default sequelize;

// const sequelize = new Sequelize("itcrowd", "root", "root123", {
//   host: "localhost",
//   dialect: "mysql",
// });
