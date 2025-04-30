const {MongoClient} = require("mongodb");

const url = "mongodb+srv://namastedev:fG2rMoecg5aF9tgK@namastenode.ycytt11.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";
async function main() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
        firstName :"Deepika",
        lastName: "Padukone",
        city: "Mumbai"
    }

    const insertResult = await collection.insertMany([data]);
    console.log(insertResult);
    
    const findResult = await collection.find({}).toArray();
    console.log(findResult);
    return 'done';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
