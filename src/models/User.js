import {model,Schema, Types} from "mongoose";

const userSchema = new Schema({
    name:{String, required:true},
    lastname:{String, required:true},
    photo:String,
    email: {String, required:true},
    password:{String,required:true},
    age:{Number,required:true},
    genre:String,
    events:[{type:Types.ObjectId,ref:'events'}],
    role:{String,required:true}

})
const User = model()