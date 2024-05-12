import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizAdd.css";
import AdminNavBar from "../../components/admin-components/AdminNavBar";
import toast from "react-hot-toast";
import axios from "axios";
import { api } from "../../config";

function QuizAdd() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [scorePoints, setScorePoints] = useState([]);
    const [timeDuration, setTimeDuration] = useState(0);

    const navigate = useNavigate();

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${api}/quiz/addQuiz`, {
                title,
                description,
                scorePoints,
                timeDuration,
            });

            toast.success("Quiz Added");
            navigate("/admin/retrieve");
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <AdminNavBar />

            <div className="quiz-add-container">
                <h3 className="quiz-add-subtitle">Add Quiz</h3>

                <div className="add-quiz-form-container">
                    <form className="container">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Score Points</label>
                            <input
                                type="text"
                                className="form-control"
                                value={scorePoints.join("|")}
                                onChange={(e) =>
                                    setScorePoints(e.target.value.split("|"))
                                }
                                required
                            />
                            <div class="form-text">
                                You can add more score points. To separate those
                                use "|" symbol.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Time Duration</label>
                            <input
                                type="number"
                                className="form-control"
                                value={timeDuration}
                                onChange={(e) =>
                                    setTimeDuration(e.target.value)
                                }
                                required
                            />
                        </div>

                        <button className="btn btn-primary" onClick={handleAdd}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default QuizAdd;
