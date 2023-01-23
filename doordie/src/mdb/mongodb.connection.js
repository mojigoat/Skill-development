const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://zypherr:doctorslater@cluster0.axc2a.mongodb.net/?retryWrites=true&w=majority';

const connectionGroup = {
    client : new MongoClient(url, { useUnifiedTopology: true }),
    database : 'dod_db'
};


async function openConnection() {
    await connectionGroup.client.connect();
    console.log('Connected successfully to server');
}

exports.connectionGroup = connectionGroup;
exports.openConnection = openConnection;



