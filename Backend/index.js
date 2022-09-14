const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const webpush = require('web-push');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const vapidKeys = {
    publicKey: 'BJsSOM9uE_Wu_j-CdJXcRrr96NBmJi2S1b57ZLQuvvBxBMIv5umfLH3U3RoEBXJU_0NXrG1peCeQlpFTG75SBoE',
    privateKey: '1mDFP0uEVUYq_21CZgqx035vThkicgoCJ4YiWKdqytU'
}

webpush.setVapidDetails(
    'mailto: adad@sddf.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

app.post('/register', async (req, res) => {
    const {uName, Email, Role, Password, sub} = req.body;

    let TblName;
    if(Role === 'Student')TblName = 'pushStudent';
    else if(Role === 'Faculty')TblName = 'pushFaculty';
    else if(Role === 'Staff')TblName = 'pushStaff';

    let notifTo = "pushStaff"; //Staff recieves all notifications   

    try{
        let sql = `insert into ${TblName} (uName, Email, Role, Password, subscription) values (?, ?, ?, ?, ?)`;
        const result = await db.execute(sql, [uName, Email, Role, Password, sub]);
        console.log(result);
        // res.send({uName, Email, Role, Password, TblName, sub});

        let sql2 = `select subscription from ${notifTo}`;
        const [result2] = await db.execute(sql2);
        // console.log(result2);  
        
        // ONly for Multiple Staff
        for(let i = 0; i < result2.length; i++) {
            let sub = result2[i].subscription;
            const payload = JSON.stringify({ title: 'Srinivas Exam Manager', body: `New ${Role} has Registered!` });
            webpush.sendNotification(sub, payload).catch(err => console.error(err));
        }
        
        // ONly for Individual Registered user
        // const payload = JSON.stringify({ title: 'Srinivas Exam Manager', body: `New ${Role} has Registered!` });
        // webpush.sendNotification(sub, payload).catch(err => console.error(err));
        
        res.sendStatus(201);
    } catch(err) {
        console.log(err);
        res.send(err);
    }
});

const PORT = process.env.PORT||8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));