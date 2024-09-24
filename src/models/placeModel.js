import {model,Schema, Types} from "mongoose";

const placeSchema = new Schema({
    name:{type: String, required:true},
    address:{type: String,required:true},
    photo:{type: String},
    events:[{type: Types.ObjectId, ref:'event'}],
    ocupancy:{type: Number, required:true}
})


const Place = model('place', placeSchema)

export default Place