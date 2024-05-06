const mongoose = require("mongoose");
const MONGOURI = "mongodb://localhost:27017/my_database";

//Establish the connection
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check wheather connection is established or not
mongoose.connection.on("connected", () => {
  console.log("connected successfully!");
});

mongoose.connection.on("error", (error) => {
  console.log(`Error! ${error}`);
});
