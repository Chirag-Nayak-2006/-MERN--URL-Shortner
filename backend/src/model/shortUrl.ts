import mongoose from "mongoose";
import { nanoid } from "nanoid";

// creating mongoose scheme, basically a blueprint for some table that we will create in the future
const shortUrlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      require: true,
    },
    shortUrl: {
      type: String,
      require: true,
      // everytime an entry is to be created without providing a shortUrl, it will create a random 10 char string using nanoid
      default: () => nanoid().substring(0, 10),
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  // a seperate object is created to store extra information that is autogenerated when a entry is made
  {
    timestamps: true,
  }
);

// creating and exporting a table or (model) with said schema/blueprint
export const urlModel = mongoose.model("ShortUrl", shortUrlSchema);
