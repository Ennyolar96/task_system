const mysql = require("mysql");
let isConnect;

if (!isConnect) {
  try {
    isConnect = mysql.createConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
    console.log("database connected");

    isConnect.query(`CREATE DATABASE tasks`, function (err, result) {
      if (!err) {
        console.log("database created");
      }
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = isConnect;
