import React from 'react'
import {IoIosCheckbox} from "react-icons/io";
import {FaTrashCan} from "react-icons/fa6";
import {FaEdit} from "react-icons/fa";

export const TodoList = () => {
    return (
        <>

            <ul className="task-list">
                <li className="task">
                    <span className="task-text">ff</span>
                    <div className="icon-container">
                        <IoIosCheckbox className="task-icon"/>
                        <FaEdit className="task-icon"/>
                        <FaTrashCan className="task-icon"/>
                    </div>
                </li>

            </ul>

        </>
    );
};