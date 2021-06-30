import mongoose from 'mongoose';

var mongoDB = 'mongodb+srv://fcgregorio:UwXUZqTml1s8hJ2E@cluster0.yr7lg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;
