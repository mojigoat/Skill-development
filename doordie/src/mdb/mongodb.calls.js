const { openConnection, connectionGroup } = require("./mongodb.connection");
// import { openConnection, connectionGroup } from "./mongodb.connection";


async function getCollection(collectionName) {
    await openConnection();
    const db = connectionGroup.client.db(connectionGroup.database);
    const collection = db.collection('tb_forfeit_drinks');

    var x = 24;
    const cursor = collection.find({ forfeit_number: x });

    await cursor.forEach(console.log);
    return 'done.';
}


//## Close connection for getCollection
// getCollection()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => connectionGroup.client.close());

function GetRandomAction() {
    const db = connectionGroup.client.db('dod_db');
    const collection = db.collection('tb_action_tasks');

    collection.countDocuments((err, count) => {
        if (err)
            throw err;
        const randomIndex = Math.floor(Math.random() * count);

        collection.find().skip(randomIndex).limit(1).toArray((err, docs) => {

            console.log(`Random index: ${randomIndex}`);

            if (err)
                throw err;
            if (docs.length === 0) {

                console.log(`No documents found`);

                client.close();
                return;
            }
            const doc = docs[0];
            console.log(doc.action_task);
            const pElement = document.getElementById('actionTask');
            pElement.textContent = doc.text;
            connectionGroup.client.close();
        });
    });
}
