import React from "react";

function UserItem({ item, onClick }) {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {item.name}

                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={onClick}
                    >
                        Challenge
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default UserItem;
