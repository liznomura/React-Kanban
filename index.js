/* jshint esversion:6 */
const express = require("express");
const session = require("express-session");
const sequelize = require("sequelize");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
