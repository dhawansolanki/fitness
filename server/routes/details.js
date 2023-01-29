const express = require("express");

const router = express.Router();
const Client = require("pg").Pool;

const client = new Client({
  user: "dhawansolanki",
  host: "db.bit.io",
  database: "dhawansolanki/fitness-hackathon",
  password: "v2_3yUe6_eeupLp4nQd4ydDPMf4kW5qt",
  port: 5432,
  ssl: true,
});

//Registration Function
router.get("/getName", async (req, res) => {
  const { email } = req.body;
  //   console.log("Your email is : ",req.body.email)
  try {
    const data = await client.query(
      `SELECT username FROM users WHERE email= $1;`,
      [email],
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Data is : ", data);
        }
      }
    ); //Checking if user already exists
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: "Database error while getname!", //Database connection error
    });
  }
});

router.post("/post/exercise", async (req, res) => {
  const exercise_type = req.body.exercise;
  // console.log("sadasasf", req.body);
  // console.log(exercise_type);
  // console.log(req.body['exercise']);
  const data = await client.query(
    `UPDATE USERS SET EXERCISE_TYPE=$1 WHERE EMAIL=$2`,
    [exercise_type, "dhawansada@asd.sdad"]
  );
  console.log(data);
  res.status(200).json({
    message: "Exercise updated!",
  });
});

router.post("/post/level", async (req, res) => {
  const level = req.body.level;
  // console.log("sadasasf", req.body);
  // console.log(exercise_type);
  // console.log(req.body['exercise']);
  const data = await client.query(`UPDATE USERS SET LEVEL=$1 WHERE EMAIL=$2`, [
    level,
    "dhawansada@asd.sdad",
  ]);
  console.log(data);
  res.status(200).json({
    message: "Level updated!",
  });
});

router.post("/post/gender", async (req, res) => {
  const gender = req.body.gender;
  // console.log("sadasasf", req.body);
  // console.log(exercise_type);
  // console.log(req.body['exercise']);
  const data = await client.query(`UPDATE USERS SET GENDER=$1 WHERE EMAIL=$2`, [
    gender,
    "dhawansada@asd.sdad",
  ]);
  console.log(data);
  res.status(200).json({
    message: "gender updated!",
  });
});

router.post("/post/submit", async (req, res) => {
  const weight = req.body.weight;
  const height = req.body.height;
  const date = req.body.date;
  // console.log("sadasasf", req.body);
  // console.log(exercise_type);
  // console.log(req.body['exercise']);
  const data = await client.query(
    `UPDATE USERS SET Weight=$1, Height=$2, DATE_OF_BIRTH=$3 WHERE EMAIL=$4`,
    [weight, height, date, "dhawansada@asd.sdad"]
  );
  console.log(data);
  res.status(200).json({
    message: "WEIGHT, height, date updated!",
  });
});


router.get("/api/userdata", async(req, res) => {
  const email = req.body.email;
  const data = await client.query(
    `SELECT EXERCISE_TYPE, LEVEL FROM USERS WHERE EMAIL=$1 `,
    ["dhawansada@asd.sdad"]
  );
  console.log(data);
  res.status(200).json({
    data: data,
  });
});

module.exports = router;  