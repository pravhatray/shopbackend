const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Quantity: { type: Number, required: true },
    Priority: { type: String, required: true ,enum:["High","Middle","Low"],default:"High"},
    Description: { type: String, required: true },
  },
  { timestamps: true }
);

const Shop = mongoose.model("shop", shopSchema);

module.exports = Shop;
