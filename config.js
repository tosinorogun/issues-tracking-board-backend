const mysql = require("mysql");
const env = require("dotenv");

env.config();

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(options);
connection.connect();

module.exports = {
  connection: mysql.createConnection(options),
};
