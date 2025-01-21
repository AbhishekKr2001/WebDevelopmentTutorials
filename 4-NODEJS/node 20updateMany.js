//HOW TO UPDATE MANY IN MONGODB

var { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017/";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateMany(client, 0.7, {
            rating1: 9.7,
            price1: 690
        });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

//FUNCTION OF UPDATEMANY

async function updateMany(client, nameoflisting, { rating1 = 0, price1 = 0 }) {
    const result = await client.db("abhi").collection("content").updateMany({ rating: { $gte: nameoflisting } }, { $set: { rating: rating1, price: price1 } })

    console.log(`${result.modifiedCount}`)
}
main().catch(console.error);