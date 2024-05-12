const express = require("express");
let QuizModel = require("../models/QuizModel");

const router = express.Router();

// add new quiz
router.post("/addQuiz", async (req, res) => {
    const { title, description, scorePoints, timeDuration } = req.body;

    try {
        const newQuiz = new QuizModel({
            title,
            description,
            scorePoints,
            timeDuration,
        });

        const result = await newQuiz.save();
        res.status(200).json({
            message: "Quiz added successful!",
            result,
        });
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
});

// Get all quizes
router.get("/getQuiz", async (req, res) => {
    try {
        const result = await QuizModel.find();
        res.status(200).json({
            message: "Quizzes are displayed!",
            result,
        });
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
});

// Get specific quiz using id
router.get("/getQuestion/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await QuizModel.findById(id);

        res.status(200).json({
            message: "Quiz details are displayed!",
            result,
        });
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
});

// Update quiz from list
router.put("/editQuiz/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, scorePoints, timeDuration } = req.body;
        const updateQuiz = { title, description, scorePoints, timeDuration };

        await QuizModel.findByIdAndUpdate(id, updateQuiz);

        res.status(200).json({
            message: "Quiz Updated!",
        });
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
});

// Delete quiz from list
router.delete("/deleteQuiz/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const result = await QuizModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Quiz details are deleted!",
        });
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
});

module.exports = router;
