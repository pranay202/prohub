// import passport from "passport";
// import googleOAuth from "passport-google-oauth20";

// import { UserModel } from "../Database/user/index.js";

// const GoogleStrategy = googleOAuth.Strategy;

// export default (passport) => {
//     passport.use(
//         new GoogleStrategy({
//             clientID: "1063750589024-54ojhsfhd5rcvv510d423haam5j7aoai.apps.googleusercontent.com",
//             clientSecret: "vXCgesPAYSGobjERBnJSJKaj",
//             callbackURL: "http://localhost:8000/auth/google/callback"
//         },
//         async(accessToken, refreshToken, profile, done) => {
//             //creating a new user by google auth
//             const newUser = {
//                 fullname: profile.displayName,
//                 email: profile.emails[0].value,
//                 profilePic: profile.photos[0].value,
//             };
//             try {
//                 // check whether the user exists or not
//                 const user = await UserModel.findOne({email: newUser.email});
//                 if (user) {
//                     // generating JWT token
//                     const token = user.generateJwtToken();
//                     //return user
//                     done(null, {user, token});
//                 } else {
//                     // create a new User
//                     const user = await UserModel.create(newUser);

//                     //return user
//                     done(null, {user, token});
//                 }
//             } catch (error) {
//                 done(null, error)
//             }
//         }
//         )
//     );
//     passport.serializeUser(function(userData, done) {
//         done(null, {...userData});
//     }); 
//     passport.deserializeUser(function(id, done) {
//         done(null, id);
//     });

// }