const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  company: {
    type: String,
  },
  price: {
    type: Number,
    require: [true, "price must be defined"],
  },
  colors: {
    type: [String],
    default: ["#000000", "#ffffff"],
  },
  image: [
    {
        data: Buffer,
        contentType: String,
      id: String,
      width: {
        type: Number,
        default: 1080,
      },
      height: {
        type: Number,
        default: 650,
      },
      url: {
        type: String,
      },
      filename: String,
      size: Number,
    },
  ],
  description: String,
  category: {
    type: String,
  },
  feature: {
    type: Boolean,
    default: false,
  },
  shipping: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('CustomApi',productSchema)