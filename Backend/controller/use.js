import User from "../modules/user.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";

//  login
const login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const existemail = await User.findOne({ email });
        if (!existemail) {
            return res.json({
                success: false,
                message: "User not found",
            });
        }

        const match = await bcrypt.compare(password, existemail.password);
        if (!match) {
            return res.json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const logintoken = createToken(existemail._id);
        res.json({
            success: true,
            logintoken,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Server error",
        });
    }
};

// create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register
const register = async(req, res) => {
    try {
        const { name, email, password } = req.body;

        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                success: false,
                message: "This email already exists",
            });
        }

        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email",
            });
        }

        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Password must be at least 8 characters",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        const regsitertoken = createToken(savedUser._id);

        res.json({
            success: true,
            regsitertoken,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Server error",
        });
    }
};
export { register, login }