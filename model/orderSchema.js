const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leadsSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required:true,
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

});

module.exports = mongoose.model("leads", leadsSchema);
