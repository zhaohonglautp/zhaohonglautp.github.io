const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
// declare axios for making http requests
const axios = require('axios');
var db;
MongoClient.connect('Connection String', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, database) => {
    if (err) return console.log(err);
    db = database.db('Database Name');
});
module.exports = router;