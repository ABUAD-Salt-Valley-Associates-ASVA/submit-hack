const express = require("express");
const app = express();

app.use(express.json());

app.post("/submit", (req, res, next) => {
  const code = req.files;
  const body = req.body;
  console.log(body);
  res.status(200).json(body);
});

app.listen(3001, () => {
  console.log(`Backend server running on port: 3001`);
});
