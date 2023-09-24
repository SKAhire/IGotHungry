const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const Users = require('../models/User');
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('this is user');
})

// To Add User

router.post('/adduser', [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 })
], async (req, res) => {

    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({ success, error: error.array() });
    }

    try {

        const userVal = await Users.findOne({ username: req.body.username });
        if (userVal) {
            return res.status(400).json({ success, error: "This username is already been taken!" })
        }
        const emailVal = await Users.findOne({ email: req.body.email });
        if (emailVal) {
            return res.status(400).json({ success, error: "This email is already in use! Try login" })
        }

        const { username, email, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(password, salt);
        const user = await Users.create({
            username: username,
            email: email,
            password: secPass
        })

        const saveUser = await user.save();
        res.send(saveUser)
        console.log(saveUser)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
router.put('/edituser/:id', [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 })
], async (req, res) => {

    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({ success, error: error.array() });
    }

    try {

        const findUser = await Users.findById(req.params.id);
        if (!findUser) {
            return res.status(500).json({ success, error: "Internal Server Error" })
        }
        const userVal = await Users.findOne({ username: req.body.username });
        if (userVal) {
            return res.status(400).json({ success, error: "This username is already been taken!" })
        }
        const emailVal = await Users.findOne({ email: req.body.email });
        if (emailVal) {
            return res.status(400).json({ success, error: "This email is already in use! Try login" })
        }

        const { username, email, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(password, salt);
        const user = await Users.findByIdAndUpdate( req.params.id,{
            username: username,
            email: email,
            password: secPass
        })

        const saveUser = await user.save();
        res.send(saveUser)
        console.log(saveUser)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.delete('/deleteuser/:id', async (req, res) => {

    let success = false;
    
    try {
        const user = await Users.findByIdAndDelete( req.params.id)

        const saveUser = await user.save();
        res.send(saveUser)
        console.log(saveUser)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router