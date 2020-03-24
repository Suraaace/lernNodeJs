const MONGODB_URL = "mongodb+srv://suresh:suresh@cluster0-c1r7w.mongodb.net/test?retryWrites=true&w=majority";
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);