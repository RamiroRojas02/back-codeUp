import eventService from "../services/eventService.js";
import userServices from "../services/userService.js";
import catched from "../utils/catched.js";
import CustomError from "../utils/customError.js";
import validatObjectId from "../utils/validObjectId.js";
import jwt from "jsonwebtoken";

const userController = {
  async signUp(req, res) {
    const data = req.body;
    const emailExist = await userServices.getByEmail(data.email);
    if (emailExist) throw new CustomError("Email already in use", 409);
    const newUser = await userServices.create(data);
    const token = jwt.sign({email:newUser.email},process.env.SECRET_KEY,{expiresIn:"1h"})
    res.status(201).json({ error: false, response: {newUser,token} });
  },
  async signIn(req, res) {
    const data = req.body;

    const userExist = await userServices.getByEmail(data.email);

    if (!userExist) throw new CustomError("Email or password incorrect", 404);
    const password =  userServices.verifyPassword(
      data.password,
      userExist.password
    );
    if (!password) throw new CustomError("Email or password incorrect", 409);
    const token = jwt.sign({email:newUser.email},process.env.SECRET_KEY,{expiresIn:"1h"})
    
    res.status(200).json({ error: false, response:{userExist,token} });
  }
};

export default {
  signUp: catched(userController.signUp),
  signIn: catched(userController.signIn),
};
