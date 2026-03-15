const mongoose=require('mongoose');

async function connectDB(params) {

try {
    const connectDB=await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Db connected`);
    
    
} catch (error) {
    console.error(error);
    
    
}    
}

module.exports=connectDB;