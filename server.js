const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors(corsOptions));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const db = require("./app/models");
db.sequelizeConnection
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log(`Failed to sync db: ${err.message}`);
  });

const biodataController = require("./app/controllers/biodata.controller");

app.post("/", (req, res) => {
  biodataController.create(req, res);
});
app.get("/", (req, res) => {
  biodataController.findAll(req, res);
});

app.get("/:id", (req, res) => {
  biodataController.findOne(req, res);
});

app.post("/:id", (req, res) => {
  biodataController.delete(req, res);
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
