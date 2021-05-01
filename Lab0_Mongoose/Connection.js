//Requiriendo mongoose
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/INMOSUCRE';
const conn = mongoose.connection;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err =>{
    console.log(err);
});

conn.once('open', _ => {
    console.log("Database Conectada desde => ",uri);
});

conn.on('error', bug =>{
    console.log("ERROR DATABASE NO ENCONTRADA => ",bug);
});