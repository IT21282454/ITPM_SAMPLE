import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizRetrieve.css";
import AdminNavBar from "../../components/admin-components/AdminNavBar";
import axios from "axios";
import { api } from "../../config";
import toast from "react-hot-toast";

function QuizRetrieve() {
    const [challenge, setChallenge] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(`${api}/quiz/getQuiz`);

            setChallenge(result.data.result);
        };

        fetchItem();
    }, []);

    // Update Quiz
    const handleEdit = (clickedItem) => {
        const id = clickedItem._id
        navigate(`/admin/edit/${id}`)
    };

    // Delete Quiz
    const handleDelete = async (clickedItem) => {
        const id = clickedItem._id;

        try {
            await axios.delete(`${api}/quiz/deleteQuiz/${id}`);

            setChallenge(
                challenge.filter((item) => {
                    if (item._id === id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            );

            toast.success("Quiz Deleted");
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <AdminNavBar />

            <div className="container-xxl">
                <div className="top-container">
                    <h3 className="subtitle">Challenges</h3>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            navigate("/admin/add");
                        }}
                    >
                        Add Quiz
                    </button>
                </div>

                <div className="table-container">
                    <table className="table table-borded">
                        <thead className="table-info">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Score Points</th>
                                <th scope="col">Time Duration</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {challenge.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            {item.scorePoints.map(
                                                (point, index) => {
                                                    return (
                                                        <p key={index}>
                                                            {point}
                                                        </p>
                                                    );
                                                }
                                            )}
                                        </td>

                                        <td>{item.timeDuration}</td>
                                        <td>
                                            <div className="action-btns">
                                                <button
                                                    className="btn btn-warning btn-sm"
                                                    onClick={() =>
                                                        handleEdit(item)
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        handleDelete(item)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default QuizRetrieve;
