const mongoose=require('mongoose')

const connectDB=async()=>
{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to MongoDb dtabase ${mongoose.connection.host}`);
    }
    catch(error){
        console.log(`MongoDb Database Error ${error}`);
    }
}

module.exports=connectDB;