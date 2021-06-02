const express = require("express");
const connection = require("../db_config");
const router = express.Router();

router.get("/", (req, res) => {
  const sql = `SELECT * FROM player`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
