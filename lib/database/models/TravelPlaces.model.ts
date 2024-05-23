import { Schema, model, models } from "mongoose";

const TravelPlacesSchema = new Schema({

})


const TravelPlacesData  = models.TravelPlacesData || model("TravelPlacesData", TravelPlacesSchema)

export default TravelPlacesData