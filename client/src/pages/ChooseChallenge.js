import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ChooseChallenge.css";
import axios from "axios";
import { api } from "../config";
import NavBar from "../components/NavBar";
import toast from "react-hot-toast";

function ChooseChallenge() {
    const params = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [challenge, setChallenge] = useState([]);

    // Retrieve Friend's Details
    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(
                `${api}/student/getStudent/${params.id}`
            );

            setUser(result.data.result);
        };

        fetchItem();
    }, [params.id]);

    // Display Challenegs
    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(`${api}/quiz/getQuiz`);

            setChallenge(result.data.result);
        };

        fetchItem();
    }, []);

    const handleClick = async (clickedItem) => {
        const challengeId = clickedItem._id;
        const senderId = "65f5ec03894037b5d8a9b9fc";
        const recieverId = params.id;

        try {
            await axios.post(`${api}/send/addMsg`, {
                senderId,
                recieverId,
                challengeId,
            });

            toast.success("Challenge Sent");
            navigate("/");
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <NavBar />

            <h3 className="choose-title">Choose Challenge for {user.name} </h3>

            <div className="choose-container">
                {challenge.map((item, index) => {
                    return (
                        <div
                            className="card choose-card"
                            key={index}
                            onClick={() => handleClick(item)}
                        >
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ChooseChallenge;
