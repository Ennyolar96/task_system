const db = require("../db");

const tasksTable = async () => {
  const create = `CREATE TABLE IF NOT EXISTS tasks( 
    title varchar(150) NOT NULL, 
    status varchar(20) NOT NULL, 
    created_at date NOT NULL`;

  await db.query(create, (err, result) => {
    console.log(err);
  });
};

module.exports = tasksTable;
