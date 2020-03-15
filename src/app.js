const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Ola estou vivo! 🤓")
})

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);

});