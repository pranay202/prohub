// import JwtPassport from "passport-jwt";

// //Database Model
// import {UserModel} from "../Database/user/index.js";

// const JwtStrategy = JwtPassport.Strategy;
// const ExtractJwt = JwtPassport.ExtractJwt;

// const options = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: "BlogApp"
// };

// export default (passport) => {
//     passport.use(
//         new JwtStrategy(options, async(jwt__payload, done) => {
//             try {
//                 const doesUserExist = UserModel.findById(jwt__payload.user);
//                 if(!doesUserExist) return done(null, false);

//                 return done(null, doesUserExist);
//             } catch (error) {
//                 throw new Error(error);
//             }
//         })
//     );
// };