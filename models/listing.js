const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/681399313.jpg?k=ce6690d3d0c2d37ff2c19f253ed4b44c623dfa019162f19b6b2754e5b43c9e56&o=&hp=1",
    set: (v) => {
      // If frontend sends { url: "..." } → extract string
      if (typeof v === "object" && v?.url) return v.url;
      // If empty string, return default
      if (v === "") return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/681399313.jpg?k=ce6690d3d0c2d37ff2c19f253ed4b44c623dfa019162f19b6b2754e5b43c9e56&o=&hp=1";
      return v;
    }
  },
  price: Number,
  location: String,
  country: String,
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
