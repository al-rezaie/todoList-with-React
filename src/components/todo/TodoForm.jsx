import React from 'react'
import {CiSearch} from "react-icons/ci";

export const TodoForm = () => {
    return (
        <>

            <form>
                <div className="form-container">
                    <input type="text" className="task-input"/>
                    <CiSearch className="input-icon"/>
                    <button type="submit" className="submit-btn">Add</button>
                </div>
            </form>

        </>
    );
};