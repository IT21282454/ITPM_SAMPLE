import React from "react";
import "./Challenges.css"
import NavBar from "../components/NavBar";
import Quiz from "../components/Quiz";
import Users from "../components/Users";

function Challenges() {
    return (
        <div className="challenges-container">
            <NavBar />
            <div className="quiz-user-container">
                <Quiz />
                <Users />
            </div>
        </div>
    );
}

export default Challenges;
