import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Brand } from "./brands";

export const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  image_url: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  brandId: {
    type: DataTypes.INTEGER, // foreign key
    allowNull: false,
  },
});

// association
Product.belongsTo(Brand, {
  foreignKey: "brandId",
  onDelete: "CASCADE",
});
