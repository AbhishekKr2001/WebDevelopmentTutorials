//HOW TO FIND  MANY IN MONGODB USING find()

const { MongoClient } = require('mongodb');      //importing mongodb module
async function main() {
    const uri = "mongodb://127.0.0.1:27017/";       //ip of mongodb
    const client = new MongoClient(uri);         //creating object of mongoclient

    try {
        await client.connect();//creating connection

        await findMany(client, {
            price1: 500
        });

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


// FUNCTION TO FIND  MANY IN MONGODB USING find()

async function findMany(client, {
    price1 = 0
} = {}) {
    const cursor = client.db("abhi").collection("content").find(
        {
            "price": { $gte: price1 }

        }
    ).sort({ price: 1 });

    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(`Found listing(s) with at least price ${price1} :`);
        results.forEach((result, i) => {

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);

            console.log(`   price: ${result.price}`);


        });
    } else {
        console.log(`No listings found with at least price ${price1} `);
    }
}

main().catch(console.error);



