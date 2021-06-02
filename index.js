const express = require("express");
const connection = require("./db_config");
const port = process.env.PORT || 4040;
const app = express();

const homeRouter = require("./routes/home");
const playerRouter = require("./routes/player");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/player", playerRouter);
app.use("/", homeRouter);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
