import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Brand = sequelize.define("brands", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  logo_url: {
    type: DataTypes.STRING,
  },
});
