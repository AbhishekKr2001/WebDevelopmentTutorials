//HOW TO MAKE CONNECTION TO MONGODB
//OPEN THE MONGO D IN COMMAND PROMPT

const { MongoClient } = require('mongodb');      //importing mongodb module
async function main() {
    const uri = "mongodb://127.0.0.1:27017/";       //ip of mongodb
    const client = new MongoClient(uri);         //creating object of mongoclient

    try {
        await client.connect();//creating connection
        await listDatabases(client);//listing databases

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");

    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);