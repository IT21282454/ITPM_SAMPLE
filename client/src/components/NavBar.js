import React from "react";
import "./NavBar.css";
import { useName } from "../GlobalContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const userName = useName();
    const navigate = useNavigate();

    const hanldeAdmin = () => {
        navigate("/admin/retrieve");
    };

    return (
        <nav className="navbar-container">
            <span className="logo">Navbar</span>
            <div className="navbar-right-container">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={hanldeAdmin}
                >
                    Admin
                </button>
                <span className="user-name">{userName}</span>
            </div>
        </nav>
    );
}

export default NavBar;
