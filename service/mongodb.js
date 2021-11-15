const MongoClient = require('mongodb').MongoClient;
const mongoUser = 'dbUser';
const mongoPassword = 'eFcWXCZivK5XsPC8';
const dbName = 'MyFirstDatabase';
const collectionName = 'prueba';

// Server path
const mongoUrl = "mongodb+srv://" + mongoUser + ":" + mongoPassword + "@cluster0.xnza6.mongodb.net";

var mongo = {

  mongoSearch: function(paramLat, paramLon) {
    MongoClient.connect(mongoUrl, function (err, db) {
      if (err) throw err;
      console.log("Connection created!");
      dbo = db.db(dbName);
      const query = { lat: paramLat, lon: paramLon };
      var search = dbo.collection(collectionName).find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log("Este es el resultado: "+ result);
      })
      await search;
      db.close();
    });
  },

  mongoInsert: function(paramLat, paramLon) {
    MongoClient.connect(mongoUrl, function (err, db) {
      if (err) throw err;
      console.log("Connection created!");
      dbo = db.db(dbName);
      const myobj = { lat: paramLat, lon: paramLon };
      var dbo = db.db(dbName);
      var insertion = dbo.collection(collectionName).insertOne(myobj);
      await insertion;
      console.log("1 document inserted");
      db.close();
    });
  }
}

module.exports = mongo;