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
const products_1 = __importDefault(require("./routes/products"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./db/connection"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = "3001";
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/products", products_1.default);
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.authenticate();
        console.log("Connection to the database successful.");
        yield connection_1.default.sync();
        app.listen(port, () => {
            console.log("Running in port " + port);
        });
    }
    catch (error) {
        console.error("Could not connect to the database:", error);
    }
});
init();
