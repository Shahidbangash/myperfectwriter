const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leadsSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required:[true , "Please enter email"],
  },
  phoneNumber: {
    type: Number, 
    required:[true , "Please enter phone number"],
  },
  deadline:{
      type:String,
      trim:true,
      required:[true , "Please enter deadline"],
  },
  documentType:{
    type:String,
    trim:true,
  },
  academicLevel:{
      type:String,
      trim:true,
      required:[true , "Please enter academic level"],
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
