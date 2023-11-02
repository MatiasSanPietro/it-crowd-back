// import express, { Application } from "express";
// import cors from "cors";
// import routesProducts from "../routes/products";
// // import routesUser from "../routes/user";
// // import { Product } from "./products";
// // import { Brand } from "./brands";
// // import { User } from "./user";
// import sequelize from "../db/connection";

// class Server {
//   private app: Application;
//   private port: string;

//   constructor() {
//     this.app = express();
//     this.port = process.env.DB_PORT || "3001";
//     // this.listen();
//     this.midlewares();
//     this.routes();
//     // this.dbConnect();
//     this.init();
//   }

//   async init() {
//     try {
//       await sequelize.authenticate();
//       console.log("Connection to the database successful.");

//       await sequelize.sync();

//       this.listen();
//     } catch (error) {
//       console.error("Could not connect to the database:", error);
//     }
//   }

//   listen() {
//     this.app.listen(this.port, () => {
//       console.log("Running in port " + this.port);
//     });
//   }

//   routes() {
//     this.app.use("/api/products", routesProducts);
//     // this.app.use("/api/users", routesUser);
//   }

//   midlewares() {
//     this.app.use(express.json());
//     this.app.use(cors());
//   }
// }

// export default Server;
