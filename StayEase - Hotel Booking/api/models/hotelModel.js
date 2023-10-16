import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  top: {
    type: Boolean,
    default: false,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
