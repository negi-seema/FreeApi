require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.port || 4000;
const Dataconnect = require("./db/connect");
const router = require('./router/product')


// middleware 
app.use('/api/items',router)

app.get("/", (req, res) => {
  res.send("helo this is response");
});

const start = async () => {
  try {
    await Dataconnect(process.env.MONGOCONNECT);
    app.listen(PORT);
    console.log("port is listened");
  } catch (error) {
    console.log(error);
  }
};

start();
