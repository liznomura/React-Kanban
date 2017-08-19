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

let cards = [
  {
    id: 10,
    title: "Make Better Styles",
    priority: "medium",
    status: "queue",
    createdBy: "Ben",
    assignedTo: "Merlin"
  },
  {
    id: 12,
    title:
      "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
    priority: "low",
    status: "queue",
    createdBy: "Ben",
    assignedTo: "Merlin"
  },
  {
    id: 14,
    title:
      "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
    priority: "high",
    status: "queue",
    createdBy: "Ben",
    assignedTo: "Merlin"
  },
  {
    id: 22,
    title:
      "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
    priority: "blocker",
    status: "queue",
    createdBy: "Ben",
    assignedTo: "Merlin"
  },
  {
    id: 17,
    title:
      "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
    priority: "medium",
    status: "progress",
    createdBy: "Ben",
    assignedTo: "Merlin"
  },
  {
    id: 25,
    title:
      "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
    priority: "medium",
    status: "done",
    createdBy: "Ben",
    assignedTo: "Merlin"
  }
];

app.get("/api/cups", (req, res) => {
  res.json([
    {
      color: "red"
    },
    {
      color: "blue"
    }
  ]);
});

app.get("/cards", (req, res) => {
  res.json(cards);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
