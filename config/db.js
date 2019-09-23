const mongoose = require("mongoose");

//Requiring local files
const config = require("config");
const db = config.get("mongoURI")

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log("DB is connected")
    } catch (err) {
        console.error(err.message);

        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;