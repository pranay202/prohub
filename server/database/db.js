import mongoose from 'mongoose';
const Connection = async () => {
    try {
        const MONGO_URL = "mongodb+srv://user:Pranay2329@prohub.xqthg.mongodb.net/Prohub?retryWrites=true&w=majority";
        await mongoose.connect(MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
            // useFindAndModify: false,
        });       
        console.log("Database Connection Successful!");
    } catch (error) {
        console.log("Database Connection failed: ",error);
    }
};

export default Connection;
