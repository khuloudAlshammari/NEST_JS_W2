//   "port": 5432,

// npx typeorm-ts-node-commonjs migration:generate PostRefactoring -d ./src/data-source.ts


// const { DataSource } = await import("typeorm");
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "DB_HM_MSR_WEEK2",
    synchronize: true,
    logging: true,
    entities: [
    __dirname + "/articles/entities/*.ts",
    // __dirname + "/auth/entities/*.ts",
    __dirname + "/user/entities/*.ts"
    ],
    migrations: [
        __dirname + "/migrations/**/*.ts",
    ],
    // cli: {
    //     migrationsDir: __dirname + "/migrations",
    // },
});

// npx typeorm-ts-node-commonjs migration:generate ./src/migrations/create-users-and-articles-d ./src/data-source.ts

export default AppDataSource;