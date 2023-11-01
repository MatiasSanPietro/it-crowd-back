"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("../routes/products"));
// import routesUser from "../routes/user";
// import { Product } from "./products";
// import { Brand } from "./brands";
// import { User } from "./user";
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.DB_PORT || "3001";
        // this.listen();
        this.midlewares();
        this.routes();
        // this.dbConnect();
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Conexión a la base de datos establecida.");
                yield connection_1.default.sync();
                this.listen();
            }
            catch (error) {
                console.error("No se puede conectar a la base de datos:", error);
            }
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicación corriendo en el puerto " + this.port);
        });
    }
    routes() {
        this.app.use("/api/products", products_1.default);
        // this.app.use("/api/users", routesUser);
    }
    midlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
}
exports.default = Server;
