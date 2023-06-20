//// Modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

/**
 * This function tries to authenticate the user based on given data
 * @param uname The username of the user
 * @param pw The encrypted password of the user
 * @param users A list of all users
 * @param res The HTTP-Response
 */
async function authenticateUser({uname, pw} , users, res){
    const user = users.find(u => {
        return u.name === uname
    });
    //returns pending promise --> doesn't render true
    if (user && await checkPassword(pw, user.password)) {
    // Generate an access token
        const payload =
            {
                id: user.userID,
                name: user.name,
                role: user.role
            };
        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '1000d' });
        res.cookie('accessToken', accessToken,{
            maxAge:  365 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });
    } else {
        res.sendStatus(500)
    }
}

/**
 * This function checks if the authentication is valid based on the JWT Token
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function authenticateJWT(req, res, next){
    const token = req.cookies['accessToken'];
    if (token) {
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, userToken) => {
            if (err) {
                req.errorStatus = 403;
                next();
            }
            //uses the same req, res for the function, which is called next so adding attribute here
            //allows use to access it later.
            req.user =
            {
                id: userToken.id,
                name: userToken.name,
                role: userToken.role
            };
            next();
        });
    } else {
        req.errorStatus = 401;
        next();
    }
}

/**
 * This functions updates the JWT
 * @param res HTTP-Response
 * @param user The user
 */
function updateJWT(res, user){
    const payload =
        {
            id: user.userID,
            name: user.name,
            role: user.role
        };
    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '1000d' });
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
}


/**
 * This functions, checks if the password is correct
 * @param password The given password
 * @param hash The hashed password from DB
 * @returns The result of the password check
 */
async function checkPassword(password, hash){
    let pw = await bcrypt.compare(password, hash)
    return pw;
}

/**
 * This functions checks if a user has enough right to access functionality
 * @param role The role of the User in question
 * @param reqUserID The userID of the User in question
 * @param userID The userID of the original user
 * @returns {boolean} If the user has the right to access it
 */
function checkAccess(role, reqUserID, userID){
    return role === "admin" || reqUserID === userID;
}

/**
 * This functions checks if the objects is owned by the user in question
 * @param reqUserID The userID of the User in question
 * @param userID The userID of the original user
 * @returns {boolean} If the user owns it
 */
function ownership(reqUserID, userID){
    return reqUserID === userID;
}

module.exports = {
    authenticateUser,
    authenticateJWT,
    checkAccess,
    ownership,
    updateJWT
};