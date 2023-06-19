//// Modules
require('dotenv').config()
const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//// App
const app = express();
const port = 8000;

//// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const gamesRouter = require('./routes/games');
const pixelsRouter = require('./routes/pixels');
const uiuxRouter = require('./routes/uiuxs');
const commentsRouter = require('./routes/comments');
const likesRouter = require('./routes/likes');
const contactRouter = require('./routes/contact');
const {authenticateJWT} = require("./services/authentication");

//// App - Configuration
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//// App - Routes
app.use(cookieParser());
app.use(authenticateJWT);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/games', gamesRouter);
app.use('/pixels', pixelsRouter);
app.use('/uiuxs', uiuxRouter);
app.use('/comments', commentsRouter);
app.use('/likes', likesRouter);
app.use('/contact', contactRouter);

/**
 * This function renders an error to the User through the error-view
 * This View displays an error to the User
 *
 * @param err The error message
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function errorHandler(err, req, res, next){
}

/**
 * This function renders the PageNotFound-View
 * This View displays that a certain page cannot be found
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function notFound(req,res,next){
    res.status(404);
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});