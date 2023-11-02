//deploy
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbPort = process.env.DB_PORT || "3306";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 11886,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root123",
  database: process.env.DATABASE || "itcrowd",
});

export default sequelize;

// //local run
// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
// dotenv.config();

// const sequelize = new Sequelize({
//   dialect: "mysql",
//   host: process.env.DB_HOST,
//   database: process.env.DATABASE,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
// });

// export default sequelize;
