const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


//It is used to sign web token . We will be suing jsonwebtoken
const JWT_SECRET='Sanket is IT person'; 


//ROUTE 1: 


// Create User using: POST "/api/auth/createuser"
//No-login required
router.post(
    '/createuser',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    ],
    async (req, res) => {
        let success=false;
        //If there are error then return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array() });
        }
        //Check wether email exist or not 
        try{
            let user= await User.findOne({email:req.body.email});
            console.log(user);
            if(user){

                return res.status(400).json({success,error:"Sory a user with this email already exist"})
            }
            // Create a new user
            const salt=await bcrypt.genSalt(10);
            const secPass= await bcrypt.hash(req.body.password,salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });
            const data={
                user:{
                    id:user.id
                }
            }
            const authtoken=jwt.sign(data,JWT_SECRET);
            success=true;
            res.json({success,authtoken}); // Return the created user
        } catch(error){
            console.error(error.message);
            res.status(500).send("Some error ocured");
        }
    }
);


//ROUTE 2:

//Authenticate a user using: POST "/api/aut/login
router.post(
    '/login',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password cannot be blank').exists(),
    ],
    async (req, res) => {
        let success=false;
        //If there are error then return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email,password}=req.body;
        try{
            let user=await User.findOne({email});
            if (!user) {
                return res.status(400).json({error:"Pls try to login with correct email/password "});
            }
            const passwordCompare= await bcrypt.compare(password,user.password);
            if(!passwordCompare){
                success=false;
                return res.status(400).json({success,error:"Pls try to login with correct email/password "});
            }

            const data={
                user:{
                    id:user.id
                }
            }
            const authtoken=jwt.sign(data,JWT_SECRET);
            success=true;
            res.json({success,authtoken});

        } catch(error){
            console.error(error.message);
            res.status(500).send("Internal server error ocured");
        }
    }
)


//ROUTE 3 :

//Get Logged In user details using Post
// Get user details : "api/auth/getuser" Login Required
router.post(
    '/getuser',
    fetchuser,
    async (req, res) => {
        try{
            userId=req.user.id;
            const user=await User.findById(userId).select("-password");
            res.send(user);
        } catch(error){
            console.error(error.message);
            res.status(500).send("Internal server error ocured");
        }
    }
)


module.exports = router;
