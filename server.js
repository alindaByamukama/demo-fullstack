// DEPENDANCIES
// setup our server
const express = require("express");
// for our routes
const path = require("path");

// IMPORT ROUTES - PATH

const landingRoutes = require("./controller/landingRoutes");

// INSTANTIATIONS

const app = express();

// CONFIGURATIONS
// setuo our pug files views directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE
// this where you can set up image, css, js handling w pug/ mvc

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

// ROUTES
app.use("/", landingRoutes);

app.get("/testing", (req, res) => {
  res.send("Testing our server, server running!");
});

app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// BOOTSTRAPPING SERVER

app.listen(8080, () => console.log("Listening on port 8080 ...  🚀"));
