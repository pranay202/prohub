// import joi from 'joi';

// export const ValidateSignup = (userData) => {

//     const Schema = joi.object({
//         fullname: joi.string().required().min(4),
//         email: joi.string().email(),
//         password: joi.string().min(5),
        // phoneNumber: joi.number().min(10)
//     });

//     return Schema.validateAsync(userData);

// };

// export const ValidateSignin = (userData) => {

//     const Schema = joi.object({
//         email: joi.string().email().required(),
//         password: joi.string().min(5).required()
//     });

//     return Schema.validateAsync(userData);

// };