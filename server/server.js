// import modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// create app using express
const app = express();

// give port
const PORT = process.env.PORT || 4200;

// middleware
app.use(cors());
app.use(bodyParser.json());

// use routes
const StudentRoute = require("./routes/StudentRoute");
const QuizRoute = require("./routes/QuizRoute");
const SendRoute = require("./routes/SendRoute")

app.use("/student", StudentRoute);
app.use("/quiz", QuizRoute)
app.use("/send", SendRoute)

// connect database
const URL = process.env.MONGODB_URL;

mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database is connected successfully!");
    })
    .catch((err) => {
        console.error(`Error : ${err}`);
        console.log("Database connection failed!");
    });

// listening port
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
