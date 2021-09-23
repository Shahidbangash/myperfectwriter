const path = require('path');
var express = require("express");
var logger = require("morgan");

//
// const dbConnect = require("./config/config");


var app = express();
const cors = require('cors');
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))



// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../restonian_frontend/build')));
// app.use("/api/restaurant", restaurant);
// app.use("/api/review", review);

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get("/", (req, res) => {
  res.json({ message: "Hello this is Myperfect Writer Server!" });
});


// dbConnect();

// All other GET requests not handled before will return our React app

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});







// module.exports = app;
