const path = require("path");
var express = require("express");
var logger = require("morgan");
const dbConnect = require("./config/config");
const orderSchema= require("./model/orderSchema")
const {createOrder , getActiveOrders , getAllOrders}= require("./controller/orderController")

var app = express();
const cors = require("cors");
const { priceCalculator , } = require("./controller/priceCalculator");

require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(logger("dev"));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(express.json({ extended: false, limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 })
);

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get("/", (req, res) => {
  res.json({ message: "Hello this is Myperfect Writer Server!" });
});
app.post("/calculate-price", priceCalculator);
app.post("/create-order",createOrder )
app.get("/get-all-orders",getAllOrders )
app.get("/get-active-orders",getActiveOrders )


app.get("*", function (req, res) {
  res.status(404).json({ message: "Sorry You have entered wrong route" });
});

dbConnect();

// All other GET requests not handled before will return our React app

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

// module.exports = app;
