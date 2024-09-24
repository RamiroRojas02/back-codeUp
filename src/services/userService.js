import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

const userServices = {
  async create(data) {
    const passwordHashed = bcrypt.hashSync(data.password || "", 10);
    data.password = passwordHashed;
    return await userModel.create(data);
  },
  async getByEmail(email) {
    return await userModel.findOne({ email: email });
  },
  verifyPassword(password, passwordHashed) {
    return bcrypt.compareSync(password || '', passwordHashed)
    
  },
};

export default userServices;
