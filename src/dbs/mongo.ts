const mongodb = require('mongodb');
const MongoClient = mongodb.Client();

const mongoConnect = (callback:any) => {
    MongoClient.connect("mongodb://localhost:27017/vic_train_board")
    .then((client:any) => {
        console.log("MongoDB connected")
        callback(client);
    })
    .catch((err:any) => {
        console.log(err);
    })
}

export default mongoConnect;