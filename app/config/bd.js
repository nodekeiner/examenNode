import mysql from "mysql2/promise";
import { config } from "dotenv";
config();
export const pool = mysql.createPool({
    host: process.env.SERVIDOR,
    user: process.env.USUARIO,
    password: process.env.PASSWORD,
    port: process.env.BASEPUERTO,
    database: process.env.BASEDEDATOS
})

// SERVIDOR = "localhost"
// BASEDEDATOS = "examenbecerra"
// BASEPUERTO = 3306
// USUARIO = "root"
// PASSWORD = ""