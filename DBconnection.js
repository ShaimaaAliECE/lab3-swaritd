// swarit dholakia (sdholaki) - se3316 - lab3

const mysql = require('mysql');

function newConnection()
{
    let connection = mysql.createConnection({
        host:'35.190.170.125',
        user: 'root',
        password:'password',
        database:'usersDB'
    });
    return connection;
}
module.exports = newConnection;