const router = require('express').Router()
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const User = require('../models/User')

/*Configure Multer for file upload*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/") //Save the file in the public/uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) //Save the file with the original name
    },
})

const upload = multer({ storage })

/*User Register*/
router.post("/register", upload.single('profileImage'), async (req, res) => {
    try {
        /*Take all information from the form*/
        const { firstName, lastName, email, password } = req.body

        /*The image file is stored in req.file*/
        const profileImage = req.file

        if (!profileImage) {
            return res.status(400).send("No file uploaded")
        }

        /*path to the image file*/
        const profileImagePath = profileImage.path

        /* Check if the user already exists */
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" })
        }

        /*Hash the password*/
        const salt = await bycrypt.genSalt();
        const hashedPassword = await bycrypt.hash(password, salt);

        /*Create a new user*/
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImagePath,
        });

        /*Save the user to the database*/
        await newUser.save()

        /*Send a success message*/
        res.status(200).json({ message: "User created successfully", user: newUser });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Registration Failed!", error: err.message });
    }
}
);

/* User Login */
router.post("/login", async (req, res) => {
    try {
        /*Take the information from the form*/
        const { email, password } = req.body

        /* Check if the user already exists */
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(409).json({ message: "User doesn't exists" })
        }

        /*Compare the hashed password*/
        const isMatch = await bycrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        /*Create jwt token*/
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        delete user.password
        res.status(200).json({ token, user })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message });
    }
})

module.exports = router