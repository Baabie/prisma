import "dotenv/config";
import express from "express";
import cors from "cors";

// Criando o servidor com o expres
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão
app.get("/", (request, response) => {
  response.status(200).json({ message: "Api Prisma 🚀" });
});

// Iniciar o servidor
app.listen(process.env.PORT, () => {
  console.log("Servidor rodando na port: ", process.env.PORT);
});
