const mysql = require('mysql2');
const connection = mysql.createPool({
    host: "162.241.30.80",
    database:"sspbyjmy_sem",
    user: "sspbyjmy_sem",
    password: "Maccak.qkV!-",
    connectionLimit:20,
})

// const connection = mysql.createPool({
//     host: process.env.HOST,
//     database:process.env.DATABASENAME,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     connectionLimit:20,
// })

module.exports = connection.promise();