const { MongoClient } = require('mongodb');

var express = require('express');
var app = express();
const fs = require('fs');
const uri = "mongodb://127.0.0.1:27017/";       //ip Address of mongodb
const client = new MongoClient(uri);         //creating object of mongoclient

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "Public/index.html");
})

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response1 = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    var data1 = JSON.stringify(response1);
    fs.appendFile('sample.txt', data1, function (err) {
        if (err) throw err;
        console.log("Content written in the file")
    });

    //importing mongodb module
    // async function main1() {

    //     try {
    //         await client.connect();//creating connection
    //         await createcollection(client, response1);
    //     } catch (e) {
    //         console.error(e);
    //     } finally {
    //         await client.close();
    //     }
    // }
    // async function createcollection(client, newlistings) {
    //     await client.db("Db-1").collection("collection-1").insertOne(newlistings);
    //     console.log("created a new collections");
    // }
    // main1().catch(console.error);
    console.log(response1);
    res.end(JSON.stringify(response1));
})


app.listen(3000);
