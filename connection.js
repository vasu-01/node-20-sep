const mongoose = require('mongoose');

async function connection() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/batch-2-20-sept');
        console.log("Connection Created")
    }catch(err){
        console.log(err)
    }
}
module.exports = connection