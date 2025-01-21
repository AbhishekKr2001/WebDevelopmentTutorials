//HOW TO FIND DATA IN MONGODB

const { MongoClient } = require('mongodb');      //importing mongodb module
async function main() {
    const uri = "mongodb://127.0.0.1:27017/";       //ip of mongodb
    const client = new MongoClient(uri);         //creating object of mongoclient

    try {
        await client.connect();//creating connection

        await FindOne(client, "nothing");

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


// FUNCTION TO FIND DATA IN MONGODB USING findOne()

async function FindOne(client, nameOfListing) {
    const result = await client.db("abhi").collection("content").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

main().catch(console.error);



