const {
  getAllTasks,
  NewTask,
  UpdateTask,
  DeleteTask,
} = require("../controller");
const express = require("express").Router();

const router = express;

router.route("/").get(getAllTasks).post(NewTask);
router.route("/:id").patch(UpdateTask).delete(DeleteTask);

module.exports = router;
