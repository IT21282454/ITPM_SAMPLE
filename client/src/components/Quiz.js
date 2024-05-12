import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import axios from "axios";
import { api } from "../config";
import QuizItem from "./QuizItem";

function Quiz() {
    const [quiz, setQuiz] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(`${api}/quiz/getQuiz`);

            setQuiz(result.data.result);
        };

        fetchItem();
    }, []);

    const handleClickQuiz = (clickekdItem) => {
        const id = clickekdItem._id
        navigate(`quizDetails/${id}`);
    };

    return (
        <div>
            <h1>Quiz List</h1>

            <div className="quiz-container">
                {quiz.map((item, index) => {
                    return (
                        <QuizItem
                            key={index}
                            item={item}
                            onClick={() => handleClickQuiz(item)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Quiz;
