const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello GeekHunter! 🤓")
})

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);

});