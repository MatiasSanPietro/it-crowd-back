"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./db/connection")); // Importa la configuración de Sequelize
const products_1 = __importDefault(require("./routes/products")); // Importa las rutas de productos
// Carga las variables de entorno desde el archivo .env
dotenv_1.default.config();
// Inicializa la aplicación Express
const app = (0, express_1.default)();
// Configura el puerto de escucha
const PORT = process.env.PORT || 3000;
// Configura middleware para el manejo de datos JSON
app.use(express_1.default.json());
// Rutas
app.use("/api/products", products_1.default); // Usa las rutas de productos en '/api/products'
// Inicializa la base de datos y sincroniza los modelos con las tablas
connection_1.default.sync().then(() => {
    console.log("Database synced.");
    // Inicia el servidor Express
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
