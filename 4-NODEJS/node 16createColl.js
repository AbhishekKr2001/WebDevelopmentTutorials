//HOW TO CREATE COLLECTION IN MONGODB

const { MongoClient } = require('mongodb');      //importing mongodb module
async function main() {
    const uri = "mongodb://127.0.0.1:27017/";       //ip Address of mongodb
    const client = new MongoClient(uri);         //creating object of mongoclient

    try {
        await client.connect();//creating connection
        await listDatabases(client);//listing databases
        await createcollection(client,
            {
                "name": "samsung",
                "price": "9900",
                "rating": "6.9",
                "quantity": "90"
            }

        );
        await insertMany(client, [{
            name: "nothing",
            rating: 7.8,
            quantity: 890
        }, {
            "name": "motorola",
            "price": "9000",
            "quantity": "500"
        }])

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//FUNCTION TO LIST DATABASES

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//FUNCTION TO CREATE COLLECTION USING  insertOne({})


async function createcollection(client, newlistings) {
    await client.db("abhi").collection("content").insertOne(newlistings);
    console.log("created  a  new collections");
}

//FUNCTION TO CREATE COLLECTION USING  insertMany({},{},{})

async function insertMany(client, newlistings) {
    await client.db("abhi").collection("content").insertMany(newlistings);
    console.log("created many new collection");
}

main().catch(console.error);



