// swarit dholakia (sdholaki) - se3316 - lab3

//database initialized

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'35.190.170.125',
    user: 'root',
    password:'password',
    database:'usersDB'
});

connection.connect();

//if there are tables in place already then reset them
connection.query(`Drop Table Time`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Table Dropped');
                }
            )

connection.query(`Drop Table Users`,
            (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Dropped');
            }
        )


//initialize the db table of times, only modifable by admin
connection.query(`CREATE TABLE Time
            (
                T1 varchar(50),
                T2 varchar(50),
                T3 varchar(50),
                T4 varchar(50),
                T5 varchar(50),
                T6 varchar(50),
                T7 varchar(50),
                T8 varchar(50),
                T9 varchar(50),
                T10 varchar(50)
            )
            ` 
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Created');
            })

//1 represents true, 0 represents false
connection.query(`CREATE TABLE Users
            (
                Name varchar(100),
                T1 varchar(100),
                T2 varchar(100),
                T3 varchar(100),
                T4 varchar(100),
                T5 varchar(100),
                T6 varchar(100),
                T7 varchar(100),
                T8 varchar(100),
                T9 varchar(100),
                T10 varchar(100)
            )
            ` 
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Created');
            })

connection.query( `insert into Time values (0,1,2,3,5,6,7,8,9,10)`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });

connection.query( `insert into Users values ('Example entry',1,1,1,1,1,1,1,1,1,1)`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });


connection.end();