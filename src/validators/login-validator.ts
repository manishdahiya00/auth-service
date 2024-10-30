import { checkSchema } from "express-validator";

export default checkSchema({
    email: {
        notEmpty: true,
        trim: true,
        errorMessage: "Email is required",
        isEmail: {
            errorMessage: "Please enter a valid email address.",
        },
    },
    password: {
        notEmpty: true,
        trim: true,
        errorMessage: "Password is required",
    },
});
