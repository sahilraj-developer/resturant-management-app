const mongoose = require('mongoose');

const connectDb =  async (DATABASE_URL)=>{
    try{
        console.log("running db ")
        const DB_OPTION = {
            dbName: 'sahildb',
            useNewUrlParser: true,
            useUnifiedTopology: true, // Ensures proper connection handling
          };
    await mongoose.connect(DATABASE_URL,DB_OPTION)
    console.log("conenct dataBase successfully")
    }catch(error){
console.log("error in db",error)
    }

}

module.exports = connectDb;