import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { request } from "http";
import { repository } from "./repository.prisma";

// Criando o servidor com o expres
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão
app.get("/", (request, response) => {
  response.status(200).json({ message: "Api Prisma 🚀" });
});

app.get("/aluno", async (request: Request, response: Response) => {
  const aluno = await repository.aluno.findMany();

  response
    .status(200)
    .json({ ok: true, mensagem: "Alunos buscdos com sucesso", dado: aluno });
});

// Iniciar o servidor
app.listen(process.env.PORT, () => {
  console.log("Servidor rodando na port: ", process.env.PORT);
});
