console.log('Server-side code running');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(express.static('src'));

const url = "mongodb+srv://zypherr:doctorslater@cluster0.axc2a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

// connect to the db and start the express server
let db;

// ***Replace the URL below with the URL for your database***
async function connectToDb() {
    try {
        await client.connect();
            db = client.db("dod_db");
            // start the express web server listening on 8080
            app.listen(8080, () => {
              console.log('listening on 8080');
            });
    } catch (err) {
        console.log(err);
    }
};

connectToDb();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// // add a document to the DB collection recording the click event
// app.post('/clicked', (req, res) => {
//     const click = {clickTime: new Date()};
//     console.log(click);
//     console.log(db);
  
//     db.collection('clicks').insertOne(click, (err, result) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('click added to db');
//         res.sendStatus(201);
//     });
// });

// get the click data from the database
app.get('/task', (req, res) => {
    db.collection('tb_action_tasks').aggregate([{ $sample: { size: 1 } }]).toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result[0]);
    });
  });
