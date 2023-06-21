// Importing the mysql module
const mysql = require('mysql');

// Creating a connection configuration object
const config = mysql.createConnection({
    host: "213.47.34.218",
    port: 42069,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "DekisDatabase"
});

/**
 * This function handles the database connection and reconnects if the connection is lost
 */
function handleDisconnect() {
    config.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
        } else {
            console.log("Connected to the database");
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

// Call the handleDisconnect function to establish the database connection
handleDisconnect();

// Exporting the config object for use in other modules
module.exports = { config };
