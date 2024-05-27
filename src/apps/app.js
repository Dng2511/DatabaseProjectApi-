const express = require('express');
const config = require('config');
const app = express();
app.use(config.get("app.prefix"), require("../routers/web"));

module.exports = app;