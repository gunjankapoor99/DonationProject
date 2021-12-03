const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Jatin-Gupta:8V2pxFy2Lbo8OVyW@cluster0.wjzw0.mongodb.net/ug?authSource=admin&replicaSet=atlas-j4d0mo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;