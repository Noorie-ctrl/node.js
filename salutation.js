const express = require("express");
const app = express();
const PORT = 3000;


app.get("/greet/:name", (req, res) => {
  const { name } = req.params;         // route parameter
  const { salutation } = req.query;    // query parameter

  let greeting;

  if (salutation) {
    greeting = `Hello, ${salutation} ${name}!`;
  } else {
    greeting = `Hello, ${name}!`;
  }

  res.send(greeting);
});


app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
