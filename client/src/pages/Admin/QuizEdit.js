import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../../config";
import AdminNavBar from "../../components/admin-components/AdminNavBar";
import toast from "react-hot-toast";

function QuizEdit() {
    const params = useParams();
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [scorePoints, setScorePoints] = useState([]);
    const [timeDuration, setTimeDuration] = useState(0);

    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(
                `${api}/quiz/getQuestion/${params.id}`
            );
            const item = result.data.result;

            setTitle(item.title);
            setDescription(item.description);
            setScorePoints(item.scorePoints);
            setTimeDuration(item.timeDuration);
        };

        fetchItem();
    }, [params.id]);

    // Modify Changes
    const handleEdit = async (e) => {
        e.preventDefault()
        
        try {
            const updatedQuiz = {title, description, scorePoints, timeDuration}

            await axios.put(`${api}/quiz/editQuiz/${params.id}`, updatedQuiz)  

            navigate("/admin/retrieve")
            toast.success("Quiz Updated")
            
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong")
        }
    }

    return (
        <div>
            <AdminNavBar />

            <div className="quiz-add-container">
                <h3 className="quiz-add-subtitle">Edit Quiz</h3>

                <div className="add-quiz-form-container">
                    <form className="container">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                            />
                        </div>

                        <button className="btn btn-primary" onClick={handleEdit} >Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default QuizEdit;
