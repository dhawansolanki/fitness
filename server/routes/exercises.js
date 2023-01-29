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


router.post("/details", async (req, res) => {
  const email = req.body.email
try {
const data = await client.query(`SELECT exercise_type, level, weight, height FROM users WHERE email=$1;`,
[email]);
const arr = data.rows;

  return res.status(200).json({ arr });

} catch (err) {
res.status(400).json(err);
}
});


module.exports = router;  