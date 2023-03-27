import express from "express";
import Restaurant from "../model/Restaurant.js";

const restaurantRoute = express.Router();

//YUNA
restaurantRoute.post("/nearrestaurant", async function (req, res) {
  const currentLocation = req.body.location;
  console.log(currentLocation);
  const nearestRestaurant = await Restaurant.findOne({
    location: {
      $near: {
        $geometry: currentLocation,
        $maxDistance: 1000, //Бид зайгаар бас хязгаарлаж болно
      },
    },
  }).exec();
  res.send(nearestRestaurant);
});

//Nearest restaurants
restaurantRoute.post("/restaurants", async function (req, res) {
  const currentLocation = req.body.address;
  console.log(currentLocation);
  const nearestRestaurants = await Restaurant.find({
    address: {
      coord: {
        $geoNear: {
          $geometry: currentLocation,
          $maxDistance: 20000,
        },
      },
    },
  }).exec();
  res.send(nearestRestaurants);
});

restaurantRoute.get("/addrestaurant", async function (req, res) {
  const newRestaurant = new Restaurant({
    name: "Hazara Indian Restaurant",
    location: {
      coordinates: [106.93516180000925, 47.91740878682804],
    },
  });
  newRestaurant.save();
  res.status(200).send("success");
});

export default restaurantRoute;
