import {model,Schema, Types} from "mongoose";

const userSchema = new Schema({
    name:{type: String, required:true},
    lastname:{type: String, required:true},
    photo:{type: String},
    email: {type: String, required:true},
    password:{type: String,required:true},
    age:{type: Number,required:true},
    genre:{type: String},
    events:[{type:Types.ObjectId,ref:'event'}],
    role:{type: String,default:'user'}

})
const User = model('user',userSchema)

export default User