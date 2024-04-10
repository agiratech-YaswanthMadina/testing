const User = require('../models/userModel')
const asynchandler = require('express-async-handler')

exports.registerUser = asynchandler (async (req, res) => {
    const {email, password} = req.body;
    const userExist = await User.findOne({email })
    if(userExist){
        res.status(400)
        throw new Error('User Already Registered')
    }

    const user = await User.create({
        email, 
        password
    })
    res.json({
        email, 
        password
    });
})

// exports.delete= async (req, res) => {
//     const {email, password} = req.body;
//     res.json({
//         email, 
//         password
//     });
// }