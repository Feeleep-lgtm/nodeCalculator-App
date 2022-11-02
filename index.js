const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send(`The result of this calculation is ${result}`);
});

app.post("/bmiCalculator", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = weight / height ** 2;

  res.send(`Your BMI is ${bmi}`);
});
app.listen(8080, () => {
  console.log("Listening at port 8080");
});
