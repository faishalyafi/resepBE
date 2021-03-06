const mongoose = require("mongoose");

async function db() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
}
db();

// mongoose.connect(process.env.URI);
// const db = mongoose.connection;

// db.once("open", () => {
//   console.log("connected to DB");
// });
// db.on("error", (err) => {
//   console.log(err);
// });
