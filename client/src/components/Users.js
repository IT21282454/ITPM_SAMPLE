import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Users.css"
import axios from "axios";
import { api } from "../config";
import UserItem from "./UserItem";

function Users() {
    const [user, setUser] = useState([]);
    const id = "65f5ec03894037b5d8a9b9fc";
    const navigate = useNavigate()

    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(
                `${api}/student/getStudentRest/${id}`
            );

            setUser(result.data.result);
        };

        fetchItem();
    }, []);

    const handleChallenge = (clickedUser) => {
        const id = clickedUser._id
        navigate(`/chooseChallenge/${id}`)
        
    };

    return (
        <div>
            <h1 className="friend-list-title">Friend List</h1>
            {user.map((item, index) => {
                return (
                    <UserItem
                        key={index}
                        item={item}
                        onClick={() => handleChallenge(item)}
                    />
                );
            })}
        </div>
    );
}

export default Users;
