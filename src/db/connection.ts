import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const isRailwayEnvironment = process.env.RAILWAY_ENV === "true";
const dbPort = process.env.DB_PORT || "3001";
let sequelize: Sequelize | any;

if (isRailwayEnvironment) {
  sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(dbPort, 10),
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });
} else {
  sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });
}

export default sequelize;

// const sequelize = new Sequelize("itcrowd", "root", "root123", {
//   host: "localhost",
//   dialect: "mysql",
// });
