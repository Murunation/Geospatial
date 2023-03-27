import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://User1:mm.123456@cplus0.sw3hupt.mongodb.net/sample_restaurants?authMechanism=DEFAULT"
  )
  .then((res) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose.connection;
