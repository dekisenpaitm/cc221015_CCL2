//// Modules
const mysql = require('mysql');

const config = mysql.createConnection({
    host: "213.47.34.218",
    port: 42069,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "DekisDatabase"
});

function handleDisconnect() {
    config.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
        }else{
            console.log("Connected");
        }
    });

    config.on('error', (err) => {
        console.error('Database connection error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect(); // Reconnect if the connection is lost
        } else {
            throw err;
        }
    });
}

handleDisconnect();

module.exports = {config};