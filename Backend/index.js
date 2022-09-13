const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Index = require('./api/product');
// const db = require('./db');
// const webpush = require('web-push');

const app = express();
app.use(express.json());
app.use("/api/product", Index);

app.use(bodyParser.json());
app.use(cors());
// app.use(
//     cors({origin: ['*']})
//   );
// app.options('/', cors())

// const vapidKeys = {
//     publicKey: 'BJsSOM9uE_Wu_j-CdJXcRrr96NBmJi2S1b57ZLQuvvBxBMIv5umfLH3U3RoEBXJU_0NXrG1peCeQlpFTG75SBoE',
//     privateKey: '1mDFP0uEVUYq_21CZgqx035vThkicgoCJ4YiWKdqytU'
// }

// webpush.setVapidDetails(
//     'mailto: adad@sddf.com',
//     vapidKeys.publicKey,
//     vapidKeys.privateKey
// )

// app.post('/register', async (req, res) => {
//     const {uName, Email, Role, Password, sub} = req.body;

//     let TblName;
//     if(Role === 'Student')TblName = 'pushStudent';
//     else if(Role === 'Faculty')TblName = 'pushFaculty';
//     else if(Role === 'Staff')TblName = 'pushStaff';

//     try{
//         let sql = `insert into ${TblName} (uName, Email, Role, Password) values (?, ?, ?, ?)`;
//         const result = await db.execute(sql, [uName, Email, Role, Password]);
//         console.log(result);
//         res.send({uName, Email, Role, Password, TblName});

//         const payload = JSON.stringify({ title: 'Srinivas Exam Manager', body: `New ${Role} has Registered!` });
//         webpush.sendNotification(sub, payload).catch(err => console.error(err));
//     } catch(err) {
//         console.log(err);
//         res.send(err);
//     }
// });

const PORT = process.env.PORT||8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));