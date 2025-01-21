//HOW TO UPDATE A LISTING USING updateOne()


var { MongoClient } = require('mongodb')

async function main() {
    const uri = "mongodb://127.0.0.1:27017/";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateOne(client, "samsung", { rating: 9.9 });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//FUNCTION TO UPDATE ONE

async function updateOne(client, nameOfListing, updatedlisting) {
    await client.db("abhi").collection("content").updateOne({ name: nameOfListing }, { $set: updatedlisting });

    console.log("Updated!!");

}
main().catch(console.error);