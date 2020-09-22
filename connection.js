const mongoose = require('mongoose')

const uri = 'mongodb+srv://russi:1234@cluster0.8wry7.mongodb.net/test?retryWrites=true&w=majority'
const db = mongoose.connection;


mongoose.connect( uri, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true  
    })

        .catch(err => console.log(err));

    db.once('open', _ => {
        console.log('DB is connected to', uri);
    })


    db.on('error', err => {
        console.log(err)
    })




/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://russi:<password>@cluster0.8wry7.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/

// mongo "mongodb+srv://cluster0.8wry7.mongodb.net/test" --username admin