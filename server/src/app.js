const express = require("express");
const path = require("path");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(routes);

app.listen(8000, () => {
    console.log("servidor em pé");
});