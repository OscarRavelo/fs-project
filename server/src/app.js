const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

app.use(morgan("combined"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(planetsRouter);
app.use("/launches", launchesRouter);

module.exports = app;
