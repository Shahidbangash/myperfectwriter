const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required:true,
  },
  orderNumber:{
    type:String,
    default:"AMP-1500",
  },
  phoneNumber: {
    type: Number, 
    required:true,
  },
  deadline:{
      type:String,
      trim:true,
      required:true,
  },
  documentType:{
    type:String,
    trim:true,
  },
  academicLevel:{
      type:String,
      trim:true,
      required:true,
  },
  submissionDate:{
      type:Date,
      default:Date()
  },
  numberOfPages:{
    type:Number,
    default:0,
  },
  title:{
    type:String,
    trim:true,
    default:"Title not Provided",
  },
  orderStatus:{
    type:String,
  }

});

module.exports = mongoose.model("orders", orderSchema);
