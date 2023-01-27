require('dotenv').config();
const model = require("./models/productModel");
const database = require("./db/connect");
const apidata = require("./api.json");

const start = async () => {
  try {
    await database(process.env.MONGOCONNECT);
    await model.deleteMany();
    await model.create(apidata);
  } catch (error) {
    console.log(error);
  }
};

start();
