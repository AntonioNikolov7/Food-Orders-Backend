import express from "express";
import bodyParser from "body-parser";

import FoodRoutes from "./routes/categories.js";

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use("/food", FoodRoutes);

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING on : http://localhost:${PORT}`);
});
