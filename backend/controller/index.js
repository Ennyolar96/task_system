const asyncHandle = require("express-async-handler");
const db = require("../db");

module.exports = {
  // get all task
  getAllTasks: asyncHandle(async (req, res) => {
    // const tasks =
    try {
      const request = await db.query(
        "SELECT * FROM tasks ORDER BY created_at desc",
        (err, result) => {
          if (!err) {
            res.status(200).json({
              message: "successful",
              data: result,
            });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }),

  //   create tasks
  NewTask: asyncHandle(async (req, res) => {
    try {
      const { title } = req.body;
      if (!title) {
        res.status(422);
        throw new Error("fill in the field");
      }

      // create database wif not exists
      const create = `CREATE TABLE IF NOT EXISTS tasks( 
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        title varchar(150) NOT NULL, 
        status varchar(20) NOT NULL, 
        created_at TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP)`;

      await db.query(create, (err, result) => {
        if (err) {
          console.log(err);
        }
      });

      const sql = `INSERT INTO tasks (title, status) VALUES ('${title}', 'Active')`;

      await db.query(sql, (err, result) => {
        if (!err) {
          res.status(201).json({
            message: "new data added",
          });
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Unable to create task",
      });
    }
  }),

  //   update
  UpdateTask: asyncHandle(async (req, res) => {
    const { id } = req.params;

    try {
      // find if the id is valid
      const sql = "SELECT * FROM tasks WHERE id = ?";
      await db.query(sql, [id], async (err, result) => {
        if (!err && result.length !== 0) {
          // making the status update
          const sql = "UPDATE tasks SET status = ? WHERE id = ?";
          await db.query(sql, ["Completed", id], (err, result) => {
            if (!err) {
              res.status(200).json({
                message: "completed",
              });
            } else {
              res.status(422).json({
                message: "unable to process request",
              });
            }
          });
          return;
        }

        res.status(422).json({
          message: "Data not found",
        });
      });
    } catch (error) {
      console.log(error);
    }
  }),

  // delete
  DeleteTask: asyncHandle(async (req, res) => {
    const { id } = req.params;

    try {
      // find if the id is valid
      const sql = "SELECT * FROM tasks WHERE id = ?";
      await db.query(sql, [id], async (err, result) => {
        if (!err && result.length !== 0) {
          const sql = "DELETE FROM tasks WHERE id = ?";
          await db.query(sql, [id], (err, result) => {
            if (!err) {
              res.status(200).json({
                message: "Tasks deleted",
              });
            } else {
              res.status(422).json({
                message: "Unable to delete data",
              });
            }
          });
          return;
        }

        return res.status(422).json({
          message: "data not found",
        });
      });
    } catch (error) {
      console.log(error);
    }
  }),
};
