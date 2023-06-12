require('dotenv').config()
import express from 'express';
import bodyParser from "body-parser";
import path from 'path';

const db = require ('../services/database').config;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '../assets')));
app.use(cors());
app.get('/', (req, res)=>{
       let sql = "SELECT * FROM users";
       db.query(sql, function (err, product, fields) {
           res.send(JSON.stringify(product));
           //JSON.stringify ==> convert to JSON string
       })

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});