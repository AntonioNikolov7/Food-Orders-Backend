import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/pizza", (req, res) => {
  let rawdata = fs.readFileSync("pizza.json");
  let pizzas = !rawdata || rawdata.length === 0 ? [] : JSON.parse(rawdata);
  res.send(pizzas);
});

router.get("/drinks", (req, res) => {
  let rawdata = fs.readFileSync("drinks.json");
  let drinksObj = !rawdata || rawdata.length === 0 ? [] : JSON.parse(rawdata);
  res.send(drinksObj);
});

router.get("/burgers", (req, res) => {
  let rawdata = fs.readFileSync("burgers.json");
  let burgersObj = !rawdata || rawdata.length === 0 ? [] : JSON.parse(rawdata);
  res.send(burgersObj);
});

router.get("/steaks", (req, res) => {
  let rawdata = fs.readFileSync("steaks.json");
  let steaksObj = !rawdata || rawdata.length === 0 ? [] : JSON.parse(rawdata);
  res.send(steaksObj);
});

export default router;
