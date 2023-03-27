import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    location: {
      //Рестораны байршил нь рестораны өгөгдөл дотор байх болно
      type: { type: String, default: "Point" },
      coordinates: [Number],
    },
  },
  {
    collection: "restaurants",
  }
);
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
//Бид $near query-г ашиглахын тулд 2dsphare ашиглах хэрэгтэй
Restaurant.collection.createIndex({ location: "2dsphere" });
export default Restaurant;
