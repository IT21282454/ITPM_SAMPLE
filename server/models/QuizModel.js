const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    scorePoints: {
        type: [String],
        required: true,
    },

    timeDuration: {
        type: Number,
        required: true,
    },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;