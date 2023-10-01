const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const connectDB = async (req, res) => {
    await mongoose.connect(process.env.Connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(()=>{
        console.log("Database connected");
    })
    .catch((error)=>{
        console.log("Database connection failed", error);
    })
}

module.exports = {
    connectDB
}

