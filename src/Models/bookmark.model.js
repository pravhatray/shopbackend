const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    // Title: { type: String, required: true },
    // Quantity: { type: Number, required: true },
    // Priority: { type: String, required: true ,enum:["High","Middle","Low"],default:"High"},
    // Description: { type: String, required: true },
    shopItemId:{ type: mongoose.Schema.Types.ObjectId, ref: 'shop', required: true }
  }
  
);

const Bookmark = mongoose.model("bookmark", bookmarkSchema);

module.exports = Bookmark;
