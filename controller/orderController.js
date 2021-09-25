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

module.exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find();
    if (orders == null) {
      res.status(400).json({
        success: false,
        message: "Sorry We have no orders right now",
        totalOrders: 0,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Here is the list of all orders",
        totalOrders: orders.length,
        orders,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "We could not fetch all the orders",
      error: err,
    });
  }
};
