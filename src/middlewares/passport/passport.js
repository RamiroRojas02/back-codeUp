import passport from "passport";

import { Strategy, ExtractJwt } from "passport-jwt";

import userServices from "../../services/userService.js";

const {SECRET_KEY} = process.env

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}

const fn = async (payload,done) =>{
    try {
        const user = await userServices.getByEmail(payload.email)
        if(!user) return done(null,false)
        
            return done(null,user)

    } catch (error) {
        return done(error,false)
    }
}

export default passport.use(new Strategy(options))