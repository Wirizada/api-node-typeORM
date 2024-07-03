import { getConnection } from "typeorm";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { Request } from "express";
import { CreateUserController } from "./CreateUserController";
import createConnection from "../database";

describe("CreatUserController", () =>{

    beforeAll( async () => {
        const connection = await createConnection();
        await connection.runMigrations();


    });

    afterAll( async () => {
        const connection = getConnection();
        await connection.query("DELETE FROM usuarios")
        await connection.close();

    });

    const createUserController = new CreateUserController();

    const response = makeMockResponse();

    it ("Deve retornar status 201 quando o usuário for criado", async () => {

        const request = {
            body: {
                nome: "Algum usuário",
                email: "email@email.com"
            }
        } as Request;
        
        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201);
    })

    it("Deve retornar status 400 quando o nome não for informado", async () => {

        const request = {
          body: {
            nome: "",
            email: "email@email.com",
          },
        } as Request;
        
        await createUserController.handle(request, response);

        expect(response.state.status).toBe(400)
    })

    it ("Deve retornar status 201 quando o email não for informado", async () => {
        const request = {
            body: {
                nome: "Algum usuario",
                email: "",
            },
        } as Request;

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201);

    })
});

