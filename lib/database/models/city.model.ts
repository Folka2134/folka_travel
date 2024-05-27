import { Schema, model, models } from "mongoose";

const CitySchema = new Schema({
  name: { type: String, required: true },
  lat: { type: String },
  lng: { type: String },
  country: { type: String },
  admin1: { type: String },
  admin2: { type: String }
});

// Create a model
const City = models.City || model("City", CitySchema);

export default City


