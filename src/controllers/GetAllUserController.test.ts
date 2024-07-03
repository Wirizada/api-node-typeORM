import { GetAllUserController } from "./GetAllUserController";
import creatConnection from "../database";
import { getConnection } from "typeorm";
import { FakeData } from "../utils/fakeData/fakeData";
import { makeMockRequest } from "../utils/mocks/mockRequest";
import { makeMockResponse } from "../utils/mocks/mockResponse";

describe("GetAllUserController", () => {

    beforeAll(async () => {
        const connection = await creatConnection();
        await connection.runMigrations();
    });

    afterAll( async () => {
        const connection = await getConnection()
        await connection.query("DELETE FROM usuarios")
        await connection.close();
    });

    const fakeData = new FakeData();

    it("Deve retornar status 200 quando pegar todos os usuarios", async () => {
        await fakeData.execute();

        const getAllUserController = new GetAllUserController();

        const request = makeMockRequest({});

        const response = makeMockResponse();

        await getAllUserController.handle(request, response);

        expect(response.state.status).toBe(200)


    })
})