//

var moment = require("moment"); // require
module.exports.priceCalculator = async (req, res, next) => {
  const { date, time, email, phone, documentType, noOfPages ,academicLevel } = req.body;
  var deadlineDate = moment(`${date} ${time}`, "MM-DD-YYYY hh:mm P");

  var hoursDifference = deadlineDate.diff(moment.utc(), "hours");
  var result = this.GetPrice(hoursDifference, academicLevel) * (noOfPages || 1);
  res.json({
    message: "Here is the price for requested subject!",
    price: result,
    success:true,
    "hoursDifference":hoursDifference,
  });
};

module.exports.GetPrice = (hours, academic) => {
  academic = academic.toLowerCase();
  if (academic === "high school") {
    return this.getHighSchoolRates(hours);
  } else if (academic === "college-undergraduate") {
    return this.getCollegeRates(hours);
  } else if (academic === "master") {
    return this.getMasterRates(hours);
  } else if (academic === "doctoral") {
    return this.getPHDRates(hours);
  }
};

module.exports.getHighSchoolRates = (hours) => {
  var day = 24;
  if (hours <= 12) {
    return 30.0;
  } else if (hours > 12 && hours <= day) {
    return 16.0;
  } else if (hours > day && hours <= 2 * day) {
    return 14.65;
  } else if (hours > 2 * day && hours <= 3 * day) {
    return 13;
  } else if (hours > 4 * day && hours <= 5 * day) {
    return 13;
  } else if (hours > 6 * day && hours <= 7 * day) {
    return 12;
  } else if (hours >= 8 * day) {
    return 12;
  }
};

module.exports.getCollegeRates = (hours) => {
  var day = 24;
  if (hours <= 12) {
    return 32.0;
  } else if (hours > 12 && hours <= day) {
    return 18.0;
  } else if (hours > day && hours <= 2 * day) {
    return 16.3;
  } else if (hours > 2 * day && hours <= 3 * day) {
    return 16;
  } else if (hours > 4 * day && hours <= 5 * day) {
    return 15.7;
  } else if (hours > 6 * day && hours <= 7 * day) {
    return 15.45;
  } else if (hours >= 8 * day) {
    return 15;
  }
};

module.exports.getMasterRates = (hours) => {
  var day = 24;
  if (hours <= 12) {
    return 37.0;
  } else if (hours > 12 && hours <= day) {
    return 21.0;
  } else if (hours > day && hours <= 2 * day) {
    return 20.8;
  } else if (hours > 2 * day && hours <= 3 * day) {
    return 20.75;
  } else if (hours > 4 * day && hours <= 5 * day) {
    return 19.0;
  } else if (hours > 6 * day && hours <= 7 * day) {
    return 18.75;
  } else if (hours >= 8 * day) {
    return 18.0;
  }
};

module.exports.getPHDRates = (hours) => {
  var day = 24;
  if (hours <= 12) {
    return 45.0;
  } else if (hours > 12 && hours <= day) {
    return 34.0;
  } else if (hours > day && hours <= 2 * day) {
    return 31.45;
  } else if (hours > 2 * day && hours <= 3 * day) {
    return 29.65;
  } else if (hours > 4 * day && hours <= 5 * day) {
    return 27.0;
  } else if (hours > 6 * day && hours <= 7 * day) {
    return 26.3;
  } else if (hours >= 8 * day) {
    return 25.0;
  }
};
