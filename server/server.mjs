import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});

app.get("/hello-world", (req, res) => {
  res.send("Well done!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
