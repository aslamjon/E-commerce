const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
function connectDb() {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongodb is connected"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

module.exports = {
  connectDb,
};
