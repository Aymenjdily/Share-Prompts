import mongoose from "mongoose";

let IsConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(IsConnected){
        console.log('MongoDB is already Connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        IsConnected = true;

        console.log('MongoDB connected')
    }
    catch (error){
        console.log(error)
    }
}