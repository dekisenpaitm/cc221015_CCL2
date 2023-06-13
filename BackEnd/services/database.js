//// Modules
const mysql = require('mysql');

//TODO: add to .env
const config = mysql.createConnection({
    host: "213.47.34.218",
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "DekisDatabase"
});


config.connect(function(err) {
    if (err) throw err;
});

module.exports = {config};