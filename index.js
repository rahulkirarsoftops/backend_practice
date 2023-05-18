//App
const app = require("./app");

//ENV
require("dotenv").config();
const Port = process.env.PORT || 5000;

//Mongo DB
require("./db");

//Route
require("./routes");

app.listen(Port, () => {
  console.log(`Port is running on ${Port}`);
});
