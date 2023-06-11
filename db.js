import mysql from "mysql";

export const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "136102Hugo",
database: "crud"
})

