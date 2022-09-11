const express = require('express');
const app = express();
const db = require('./db');
const push = require('web-push');

app.post('/register', (req, res) => {
    const {uName, Email, Role, Password} = req.body;
    let TblName;
    if(Role === 'Student')TblName = 'pushStudent';
    else if(Role === 'Faculty')TblName = 'pushFaculty';
    else if(Role === 'Staff')TblName = 'pushStaff';

    res.send(uName, Email, Role, Password, TblName);

    let sql = `insert into ${TblName} (uName, Email, Role, Password) values (?, ?, ?, ?)`;
    // const result = db.execute(sql, [uName, Email, Role, Password]);
    // console.log(result);
});

const PORT = process.env.PORT||8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));