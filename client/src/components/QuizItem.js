import React from "react";

function QuizItem({item, onClick}) {
    return (
        <div>
            <div className="card" onClick={onClick}>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                </div>
            </div>
        </div>
    );
}

export default QuizItem;
