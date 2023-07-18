const express = require("express");
const config  = require("./config/app.js");
const db = require("./database/connect.js");
const cors = require("cors");
const chatRoute = require("./app/routes/chatRoute.js");
const messageRoute = require("./app/routes/messageRoute.js");

const app = express();

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully...');
  })
  .catch(err => {
    console.error('Unable to connect to the database: ', err);
});

db.sync({ force: true });
console.log("All models were synchronized successfully.");

app.use(express.json());
app.use(cors());
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);

app.listen(config.config.run_port, (req, res) => {
	console.log(`server running on port: http://127.0.0.1:${config.config.run_port}`);
});