const User = require("../models/User");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const JWT = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_PASS
        ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("Something Wrong!");

        const hashedPass = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_PASS
        );
        const OriginalPass = hashedPass.toString(CryptoJS.enc.Utf8);
        OriginalPass !== req.body.password && res.status(401).json("Something Wrong!");

        const accessToken = JWT.sign(
            {
                id:user._id,
                isAdmin:user.isAdmin,
            },
            process.env.SECRET_JWT,
            {expiresIn:"3d"}
        );

        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;