const express = require("express");
let StudentModel = require("../models/StudentModel");

const router = express.Router();

// Add new student
router.post("/addStudent", async (req, res) => {
    const { name } = req.body;

    const newStudent = new StudentModel({ name });

    await newStudent
        .save()
        .then((result) => {
            res.status(200).json({
                message: "Student added successfully!",
                result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Student added failed!",
                error: err,
            });
        });
});

// Get all students
router.get("/getStudents", async (req, res) => {
    await StudentModel.find()
        .then((result) => {
            res.status(200).json({
                message: "Student details success!",
                result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Student details failed!",
                Error: err,
            });
        });
});

// Get student by id
router.get("/getStudent/:id", async (req, res) => {
    const id = req.params.id;

    await StudentModel.findById(id)
        .then((result) => {
            res.status(200).json({
                message: "Student details success!",
                result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Student details failed!",
                Error: err,
            });
        });
});

// Get students expect id
router.get("/getStudentRest/:id", async (req, res) => {
    const id = req.params.id;

    await StudentModel.find({ _id: { $ne: id } })
        .then((result) => {
            res.status(200).json({
                message: "Student details success!",
                result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Student details failed!",
                Error: err,
            });
        });
});

module.exports = router;
