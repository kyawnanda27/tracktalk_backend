const jwt = require("jsonwebtoken");
const {User} = require("../db/models")

const checkJWT = async (req, res, next) => {
    console.log("here in checkJWT")
    try {
        
        console.log("this is cookies",req.cookies)
        const token = req.cookies.jwt;
        console.log("this is token ",token);
        if(!token){

            return res.status(401).send("Unauthorized : No token provided.");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).send("Unauthorized : Invalid token.");
        }

        const user = await User.findByPk(decoded.userId);
        console.log(user)
          
        if(user){
            const {password, ...userWithoutPassword} = user;
            req.userData = userWithoutPassword.dataValues;
            
            
            next();
        } else {
            return res.status(404).send("User not found 1 .");
        }
        // const {password}

    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {checkJWT};