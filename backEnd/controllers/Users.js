const USER = require('../models/users')
const cookieParser = require('cookie-parser')
const secret = process.env.SECRET_ACCESS_TOKEN;
const jwt = require('jsonwebtoken')

//sign up
exports.createNewUser = async (req, res, next) => {
    try {
        const {userName}=req.body; 
        const {passWord}=req.body;
        if  (await USER.exists({userName:userName}))
        {
            return res.send("username already signup")
        }
        else{
            const newUsername = await USER.create({
            userName: userName,
            passWord: passWord,
            })
            res.status(200).json(newUsername);
        }
    } catch (error) {
        next(error);
    }
};

// Log In
exports.login = async (req, res, next) => {
    try {
      // res.send('in');
      const { userName, passWord } = req.body;
      const username = await USER.find({
        userName: userName,
        passWord: passWord,
      });
      console.log(username);
      if (username.length === 0) {
        throw { status: 404, messege: 'user name or password not right' };
      } else {
        const user = { userName, passWord };
        const token = generateAccessToken(user);
        return res.status(200).cookie('token', token).send(true); // maxAge : 3600
      }
      // res.status(200).json(username);
    } catch (error) {
      next(error);
    }
  };
  

function generateAccessToken(user) {
    return jwt.sign({ user }, 'process.env.ACCESS_TOKEN_SECRET', {
      expiresIn: '3600s',
    });
  }



function authToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, secret, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
}