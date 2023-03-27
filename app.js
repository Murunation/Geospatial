import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import "./config/mongoose-config.js";
import restaurantRoute from "./controller/restaurant-api.js";

const app = express();

const port = 4040;

app.use(express.json());
app.use(cors());
app.use(restaurantRoute);

app.listen(port, () => {
  console.log("Listening on ", port);
});
