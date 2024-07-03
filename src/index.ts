import express, { Request, Response } from "express";
import "reflect-metadata";
import  createConnection from "./database";
import { router } from "./routes/routes";

createConnection();
const server = express();

server.use(express.json());
server.use(router);

server.listen(5000, () => {
    console.log("Servidor on na porta 5000");
});