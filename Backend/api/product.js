const express = require('express');
// const cors = require('cors');
const db = require('../db');
// const bodyParser = require('body-parser');
const webpush = require('web-push');
const router = express.Router();

// const app = express();
// app.use(express.json());
// app.use(bodyParser.json()); 
// app.use(cors());

const vapidKeys = {
    publicKey: 'BJsSOM9uE_Wu_j-CdJXcRrr96NBmJi2S1b57ZLQuvvBxBMIv5umfLH3U3RoEBXJU_0NXrG1peCeQlpFTG75SBoE',
    privateKey: '1mDFP0uEVUYq_21CZgqx035vThkicgoCJ4YiWKdqytU'
}

webpush.setVapidDetails(
    'mailto: adad@sddf.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

router.get('/', async (req, res) => {
    try{
        res.json({message: 'Welcome to Srinivas Exam Manager'});
        console.log("Working");
    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

router.get('/register', async (req, res) => {

    const {uName, Email, Role, Password, sub} = req.body;

    let TblName;
    if(Role === 'Student')TblName = 'pushStudent';
    else if(Role === 'Faculty')TblName = 'pushFaculty';
    else if(Role === 'Staff')TblName = 'pushStaff';

    try{
        let sql = `insert into ${TblName} (uName, Email, Role, Password) values (?, ?, ?, ?)`;
        const result = await db.execute(sql, [uName, Email, Role, Password]);
        console.log(result);
        res.send({uName, Email, Role, Password, TblName});
        res.json({message: 'Welcome to Srinivas Exam Manager'});

        const payload = JSON.stringify({ title: 'Srinivas Exam Manager', body: `New ${Role} has Registered!` });
        webpush.sendNotification(sub, payload).catch(err => console.error(err));
    } catch(err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;

// const PORT = process.env.PORT||8080;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));