
import { Sequelize } from "sequelize";

const db = new Sequelize('dataku', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;