import { checkSchema } from "express-validator";

export default checkSchema({
    firstName: {
        notEmpty: true,
        errorMessage: "First Name is required",
    },
    lastName: {
        notEmpty: true,
        errorMessage: "Last Name is required",
    },
    email: {
        notEmpty: true,
        trim: true,
        isEmail: true,
        errorMessage: "Email is required",
    },
    password: {
        notEmpty: true,
        trim: true,
        errorMessage: "Password is required",
    },
});
