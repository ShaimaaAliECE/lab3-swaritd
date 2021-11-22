// swarit dholakia (sdholaki) - se3316 - lab3

const newConnection = require('./DBConnection');
const connection = newConnection();

connection.query( `select * from Time `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });

connection.query( `select * from Users `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });
            
connection.end();