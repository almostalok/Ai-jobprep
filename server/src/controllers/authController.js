const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const blacklistModel = require('../models/blacklist.model');

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    if (!password || (!username && !email)) {
        return res.status(400).json({ message: 'invalid input' });
    }

    const isUserAlreadyExist = await userModel.findOne({
        $or: [{ username }, { email }],
    });

    if (isUserAlreadyExist) {
        return res.status(400).json({ message: 'User already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT) || 10);

        const user = await userModel.create({
            username: username,
            email: email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        res.cookie('token', token);

        res.status(201).json({
            message: 'Successfully created user',
            user: {
                id: user._id,
                username: username,
                email: email,
            },
        });
    } catch (error) {
        res.status(400).json({ message: error.message || error });
    }
}

async function loginUser(req, res) {
    const { username, email, password } = req.body;

    if (!password || (!username && !email)) {
        return res.status(400).json({ message: 'invalid input' });
    }

    const user = await userModel.findOne({
        $or: [{ username }, { email }],
    });

    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: 'invalid password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });

    res.cookie('token', token);

    res.status(200).json({
        message: 'user logged in successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        },
    });
}

async function logoutUser(req, res) {

    const token=req.cookies.token;

    if(token){
        await blacklistModel.create({token  })
    }

    res.clearCookie('token');
    res.status(200).json({ message: 'logged out' });
}

async function getme(req,res) {

    const user=await userModel.findById(
        req.user.id
    )

    res.status(200).json({
        message:`user fetched successfully`,
        users:{
            id:user._id,
            username:user.username,
            email:user.email

        }
    })
    
}

module.exports = { registerUser, loginUser, logoutUser,getme };