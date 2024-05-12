import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./QuizDetails.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { api } from "../config";

function QuizDetails() {
    const params = useParams();
    const [question, setQuestion] = useState({ scorePoints: [] });

    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(
                `${api}/quiz/getQuestion/${params.id}`
            );
            setQuestion(result.data.result);
        };

        fetchItem();
    }, [params.id]);

    const handleAttemp = (clickekdItem) => {
        console.log(clickekdItem);
    };

    return (
        <div>
            <NavBar />

            <div className="card quiz-details-container">
                <div className="card-body">
                    <h5 className="card-title">{question.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        {question.description}
                    </h6>
                    <h3>Score Criteria</h3>
                    {question.scorePoints.map((item, index) => {
                        return (
                            <p className="card-text" key={index}>
                                {index + 1}. {item}
                            </p>
                        );
                    })}
                    <p className="card-text">
                        <h3>Time</h3>
                        {question.timeDuration} mins
                    </p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleAttemp(question)}
                    >
                        Attemp Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuizDetails;
