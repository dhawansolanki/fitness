const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

let cors = require("cors");

var corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const userRoute = require("./routes/user")
const detailsRoute = require("./routes/details")
const exercisesRoute=require("./routes/exercises")

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});




app.use("/user",userRoute);
app.use("/details",detailsRoute);
app.use("/exercises",exercisesRoute);


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
