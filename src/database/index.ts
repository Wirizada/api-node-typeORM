import { Database } from "sqlite3";
import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async ():Promise<Connection> => {
    const defaultOption = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOption,{
            database: process.env.NODE_ENV === 'teste' ?
            './src/database/database.teste.sqlite' :
            defaultOption.database
        })
    )
}