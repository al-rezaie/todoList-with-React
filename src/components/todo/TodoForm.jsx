import React from 'react'
import {CiSearch} from "react-icons/ci";

export const TodoForm = () => {
    return (
        <>

            <form>
                <div className="form-container">
                    <input type="text" className="task-input"/>
                    <button type="button" className="input-icon"  style={{background: 'none', border: 'none'}}>
                        <CiSearch className="input-icon"/>
                    </button>
                    <button type="submit" className="submit-btn">Add</button>
                </div>
            </form>

        </>
    );
};