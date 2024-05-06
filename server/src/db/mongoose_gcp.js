// var MongoClient = require('mongodb').MongoClient

// //Create a MongoDB client, open a connection to DocDB; as a replica set,
// //  and specify the read preference as secondary preferred

// var client = MongoClient.connect(
// // 'mongodb://niyati:password@docdb-2024-04-24-21-48-22.cluster-cvmsk4aagvbs.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false',
//  'mongodb+srv://niyatipatel2702:TestPassword@tablereserve.frrvcvb.mongodb.net/TableReserve?retryWrites=true&w=majority',
// //'mongodb+srv://niyatipatel2702:TestPassword@tablereserve.frrvcvb.mongodb.net/TableReserve',
// {
//   // tlsCAFile: `global-bundle.pem`, //Specify the DocDB; cert
//   useUnifiedTopology: true
// },
// function(err, client) {
//     if(err)
//         throw err;

//     //Specify the database to be used
//     db = client.db('sample-database');

//     //Specify the collection to be used
//     col = db.collection('sample-collection');

//     //Insert a single document
//     col.insertOne({'hello':'Amazon DocumentDB'}, function(err, result){
//       //Find the document that was previously written
//       col.findOne({'hello':'DocDB;'}, function(err, result){
//         //Print the result to the screen
//         console.log(result);

//         //Close the connection
//         client.close()
//       });
//    });
// });
                    
const mongoose = require("mongoose");
const MONGOURI = "mongodb+srv://niyatipatel2702:TestPassword@tablereserve.frrvcvb.mongodb.net/?retryWrites=true&w=majority";

//Establish the connection
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check wheather connection is established or not
mongoose.connection.on("connected", () => {
  console.log("connected successfully!");
});

mongoose.connection.on("error", (error) => {
  console.log(`Error! ${error}`);
});
