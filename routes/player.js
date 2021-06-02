const express = require("express");
const connection = require("../db_config");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, role } = req.body;
  const sql = `INSERT INTO player (name, role) VALUES (?, ?)`;

  connection.query(sql, [name, role], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

router.delete("/:id", (req, res) => {
  const playerId = req.params.id;
  const sql = "DELETE FROM player WHERE id = ?";

  connection.query(sql, [playerId], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

router.put("/:id", (req, res) => {
  const playerId = req.params.id;
  const playerPropsToUpdate = req.body;
  const sql = "UPDATE player SET ? WHERE id = ?";

  connection.query(sql, [playerPropsToUpdate, playerId], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
