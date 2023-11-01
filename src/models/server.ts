import express, { Application } from "express";
import cors from "cors";
import routesProducts from "../routes/products";
// import routesUser from "../routes/user";
import { Product } from "./products";
import { Brand } from "./brands";
import { User } from "./user";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.DB_PORT || "3001"; //PORT
    this.listen();
    this.midlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Aplicacion corriendo en el puerto " + this.port);
    });
  }

  routes() {
    this.app.use("/api/products", routesProducts);
    // this.app.use("/api/users", routesUser);
  }

  midlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  async dbConnect() {
    try {
      await Brand.sync();
      await Product.sync();
      await User.sync();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export default Server;
