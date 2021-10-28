const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  product_id: {
    type: Types.ObjectId,
    required: true,
    ref: "Product",
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
  username: {
    type: Types.Array,
    required: true,
  },
  voter_ids: [{ type: Types.ObjectId, ref: "User" }],
});

module.exports = {
  ReviewsModel: model("Reviews", schema),
};
