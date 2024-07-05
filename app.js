import express from "express";
import dotenv from "dotenv";
import path from "path"; // Módulo para trabajar con rutas de archivos
import router from "./routes/Routing.js";
import { fileURLToPath } from "url";

console.clear();

dotenv.config();

// Obtener el directorio actual en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const expressApp = express();

expressApp.use(express.json());

// Middleware para servir archivos estáticos desde la carpeta 'public'
expressApp.use(express.static(path.join(__dirname, "public")));

expressApp.use(router);

expressApp.listen(PORT, () => console.log(`listening on port ${PORT}`));

export default expressApp;
