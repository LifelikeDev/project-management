const mongoose = require('mongoose')

const connectDB = async () => {
    const connectn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${connectn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;