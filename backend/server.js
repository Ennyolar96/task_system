require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");
const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", require("./router"));
app.use(errorHandler);

// listener
app.listen(PORT, () =>
  console.log(`server is running at http://localhost:${PORT}`)
);
