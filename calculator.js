// Import express
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/calculate", (req, res) => {
  const { num1, num2, op } = req.query;

  if (!num1 || !num2 || !op) {
    return res
      .status(400)
      .send(" Please provide num1, num2, and op (add, subtract, multiply, divide).");
  }

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).send(" num1 and num2 must be valid numbers.");
  }

  let result;
  let symbol;

  switch (op.toLowerCase()) {
    case "add":
      result = number1 + number2;
      symbol = "+";
      break;
    case "subtract":
      result = number1 - number2;
      symbol = "-";
      break;
    case "multiply":
      result = number1 * number2;
      symbol = "×";
      break;
    case "divide":
      if (number2 === 0) {
        return res.status(400).send(" Division by zero is not allowed.");
      }
      result = number1 / number2;
      symbol = "/";
      break;
    default:
      return res
        .status(400)
        .send("Unsupported operation. Use add, subtract, multiply, or divide.");
  }

  res.send(`The result of ${number1} ${symbol} ${number2} is ${result}`);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

