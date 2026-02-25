import mongoose from "mongoose";

const connectDB =async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DATABASE CONNECTED SUCCESSFULLY");
    }
    catch(error){
        console.log("Error while connecting to database:",error);
        process.exit(1); // exit with failure code

    }
}

export default connectDB;