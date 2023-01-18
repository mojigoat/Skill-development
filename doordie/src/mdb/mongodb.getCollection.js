const { openConnection, connectionGroup } = require("./mongodb.connection");


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
