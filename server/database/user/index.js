// import mongoose from 'mongoose';
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const UserSchema = new mongoose.Schema({
//     fullname: {type: String, required: true},
//     email: {type: String, required: true},
//     password: {type: String},
//     phoneNumber: [{type: Number}],
//     address: [{detail: {type: String}, for: {type: String}}],
// },
// {
//     timestamps: true
// });

// UserSchema.methods.generateJwtToken = function () {
//     return jwt.sign({user: this._id.toString()}, "ZomatoApp");
// };

// // For user sign up
// UserSchema.statics.findEmailAndPhone = async ({email, phoneNumber}) => {
//     //check whether the email exists
//     const checkUserByEmail = await UserModel.findOne({email});

//     //check whether the Phone exists
//     const checkUserByPhone = await UserModel.findOne({phoneNumber});

//     // if user already exists,
//     if (checkUserByEmail || checkUserByPhone) {
//         throw new Error("User already Exist!");
//     }
//     return false;
// };

// // For user Sign In
// UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
//     //check whether the email exists
//     const user = await UserModel.findOne({email});
//     //if email does not exits 
//     if(!user) throw new Error("User does not Exist!");

//     //check whether the password matches or not .. simply compare
//     const doesPasswordMatch = await bcrypt.compare(password, user.password)

//     // if user already exists,
//     if (!doesPasswordMatch) {
//         throw new Error("Invalid Password!");
//     }
//     return user;
// };

// UserSchema.pre("save", function(next) {
//     const user = this;

//     // if the passsword is not modified move to next Steps
//     if(!user.isModified("password")) return next();

//     //generating bcrypt salt
//     bcrypt.genSalt(8, (error, salt) => {
//         if(error) return next(error);

//         //hashing the password
//         bcrypt.hash(user.password, salt, (error, hash) => {
//             if(error) return next(error);

//             //assigning the hashed password
//             user.password = hash;
//             return next();
//         })
//     })
// })

// export const UserModel = mongoose.model("Users", UserSchema);