const mongodb = require('mongodb');
const MongoClient = mongodb.Client();

let _db:any;

const mongoConnect = (cb:any) => {
    MongoClient.connect("mongodb://localhost:27017/vic_train_board")
    .then((client:any) => {
        console.log("MongoDB connected")
        _db = client.DB();
        cb();
    })
    .catch((err:any) => {
        console.log(err);
    })
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No DB found';
}

export {
    mongoConnect,
    getDb
}