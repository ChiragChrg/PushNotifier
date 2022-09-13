const express = require('express');
const cors = require('cors');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    const {uName, Email, Role, Password} = req.body;
    let TblName;
    if(Role === 'student')TblName = 'pushStudent';
    else if(Role === 'faculty')TblName = 'pushFaculty';
    else if(Role === 'staff')TblName = 'pushStaff';

    // res.send({uName, Email, Role, Password, TblName});

    let sql = `insert into ${TblName} (uName, Email, Role, Password) values (?, ?, ?, ?)`;
    // const result = db.execute(sql, [uName, Email, Role, Password]);
    // console.log(result);
});

const PORT = process.env.PORT||8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));