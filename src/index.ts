import express, { Application } from "express";
import cors from "cors";
import routesProducts from "./routes/products";
import dotenv from "dotenv";
import sequelize from "./db/connection";

dotenv.config();

const app: Application = express();
const port: string = "3001";

app.use(express.json());
app.use(cors());
app.use("/api/products", routesProducts);

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database successful.");

    await sequelize.sync();

    app.listen(port, () => {
      console.log("Running in port " + port);
    });
  } catch (error) {
    console.error("Could not connect to the database:", error);
  }
};

init();
