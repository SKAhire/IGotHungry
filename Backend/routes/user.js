const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const Users = require('../models/User');
const fetchuser = require('../middleware/fetchuser');

// require to upload files
const multer = require('multer');
const fs = require('fs');
const path = require('path');
express().set("view engine", 'ejs');

// seting foldername and filename
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now())
    }
});
const upload = multer({storage: storage});





router.get('/getuser',fetchuser, async (req, res) => {

    try {
        const user = await Users.findById(req.user.id);
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

    const findUser = await Users.findById(req.user.id);
        if (!findUser) {
            return res.status(500).json({ success, error: "Internal Server Error" })
        }
})

// To Add User

router.post('/adduser', upload.single('profileImg') , [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 })
], async (req, res, next) => {

    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({ success, error: error.array() });
    }

    try {

        
        const emailVal = await Users.findOne({ email: req.body.email });
        if (emailVal) {
            return res.status(400).json({ success, error: "This email is already in use! Try login" })
        }

        const { username, email, password, profileImg } = req.body;
        console.log(profileImg)

        const salt = bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(password, salt);
        const user = await Users.create({
            username: username,
            email: email,
            password: secPass,
            profileImg: "test.png"
            // profileImg: {
            //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + profileImg)),
            //     contentType: 'image/png'
            // }
        })

        await user.save();
        const data = {
            user: {
                id: user.id,
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET)
        success = true;

        res.send({authToken, success})
        console.log(authToken)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Edit Password
router.put('/change-password', fetchuser, [
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 })
], async (req, res) => {

    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({ success, error: error.array() });
    }

    try {

        const findUser = await Users.findById(req.user.id);
        if (!findUser) {
            return res.status(500).json({ success, error: "Internal Server Error (1)" })
        }else{
            console.log('done')
        }

        const { password } = req.body;
        console.log(password)

        const salt = bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(password, salt);
        const user = await Users.findByIdAndUpdate( req.user.id,{
            password: secPass
        })

        // const saveUser = await user.save();
        success = true;
        res.send({user, success})
        console.log(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error (2)");
    }
})

//Edit user
router.put('/edituser', fetchuser, [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
], async (req, res) => {

    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({ success, error: error.array() });
    }

    try {

        const findUser = await Users.findById(req.user.id);
        if (!findUser) {
            return res.status(500).json({ success, error: "Internal Server Error" })
        }
        const emailVal = await Users.findOne({ email: req.body.email });
        if (emailVal) {
            return res.status(400).json({ success, error: "This email is already in use! Try login" })
        }

        const { username, email } = req.body;

        const user = await Users.findByIdAndUpdate( req.user.id,{
            username: username,
            email: email
        })

        const saveUser = await user.save();
        success = true;
        res.send({saveUser, success})
        console.log(saveUser)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Delete User
router.delete('/deleteuser/:id', async (req, res) => {

    let success = false;
    
    try {
        const user = await Users.findByIdAndDelete( req.params.id)

        const saveUser = await user.save();
        if(saveUser){
            res.status(200).send()
        }
        success = true;
        res.send({saveUser, success})
        console.log(saveUser)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// login user
router.post('/login',[
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async(req, res) =>{

    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({ success, error: error.array() });
    }
    try {
        const {email, password } = req.body;
        const user = await Users.findOne({email})
        if(!user){
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }

        const passCompare = await bcrypt.compare(password, user.password)
        if(!passCompare){
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.json({ success, authToken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
} )

module.exports = router