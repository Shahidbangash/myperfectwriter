const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderModel = require("../model/orderSchema");

module.exports.createOrder = async (req, res, next) => {
  try {
    const data = req.body;

    const order = orderModel.save({
      data,
    });

    res.status(201).json({
      success: true,
      message: "Your order is successfully created",
      order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "We could not create Order ",
      error: err,
    });
  }
};
