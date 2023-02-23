console.log('Server-side code running');

const bcrypt = require('bcrypt');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express.static('src'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const url = "mongodb+srv://zypherr:doctorslater@cluster0.axc2a.mongodb.net/?retryWrites=true&w=majority"; //To add to .config file
const client = new MongoClient(url, { useNewUrlParser: true });

// connect to the db
let db;
async function connectToDb() {
    try {
        await client.connect();
            db = client.db("dod_db");
            app.listen(8080, () => {
            });
    } catch (err) {
        console.log(err);
    }
};

connectToDb();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// signup
app.post('/createAccount', (req, res) => {
  const { username, email, pswd, ageDate } = req.body;

  db.collection('tb_users').insertOne({
          user_username: username,
          user_password: pswd,
          user_email: email,
          user_date_of_birth: new Date(ageDate),
          user_lastlogin: new Date(),
          user_created: new Date(),
          }, (err, result) => {
            if (err) {
                return console.log(err);
            }
            res.sendStatus(201);
        });
});

// get the click data from the database
app.get('/task/random', (req, res) => {
    db.collection('tb_action_tasks').aggregate([{ $sample: { size: 1 } }]).toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result[0]);
    });
  });

app.get('/forfeit/random', (req, res) => {
    db.collection('tb_forfeit_drinks').aggregate([{ $sample: { size: 1 } }]).toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result[0]);
    });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.collection('tb_users').findOne({ user_username: username });

  if (!user) {
    return res.status(401).json({ message: 'Incorrect login' });
  }
  // Compare the input password with the password - To be implementing Hashing with Bcrypt SOON!
  if (password != user.user_password) {
    return res.status(401).json({ message: 'Incorrect login' });
  }
  return res.status(200).json({ message: 'Logged in' });
});
