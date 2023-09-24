const mongoose = require('mongoose');

async function connectToMongo() {
    await mongoose.connect(process.env.REACT_APP_MONGOOSEURI).then(()=>{
        console.log('Connected to Db!')
    }).catch(err => console.log(err));
}

module.exports = connectToMongo;