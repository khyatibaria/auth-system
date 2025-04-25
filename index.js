import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
  console.log("request", req);
  res.send("helloooooo worldddd");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
