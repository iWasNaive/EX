process.env.NODE_OPTIONS = "--dns-result-order=ipv4first";

const express = require("express");

const convertRoute = require("./routes/convert");

const app = express();

app.use(express.json());

app.use("/convert", convertRoute);

module.exports = app;
