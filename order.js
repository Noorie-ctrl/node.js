const express = require("express");
const app = express();
const PORT = 3000;


app.get("/admin", (req, res) => {
  res.send("Welcome, Admin!");
});


app.get("/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Welcome, ${username}!`);
});


app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
