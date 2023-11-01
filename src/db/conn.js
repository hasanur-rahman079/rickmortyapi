const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/rickmorty", {
    // for prevent deprication warning
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((e) => {
    console.log(`No connection  for ${e}`);
  });
