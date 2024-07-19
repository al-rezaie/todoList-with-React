import React from 'react'
import {IoIosCheckbox} from "react-icons/io";
import {FaTrashCan} from "react-icons/fa6";
import {FaEdit, FaSave} from "react-icons/fa";
import {MdCancel} from "react-icons/md";

export const TodoList = ({data}) => {
    return (
        <>

            <ul className="task-list">
                {data.map(task =>
                    task.editMode ?

                        <form>
                            <li className="task">
                                <input type="text" className="task-input" defaultValue={task.text}/>
                                <div className="icon-container">
                                    <button type="submit" style={{background: 'none', border: 'none'}}>
                                        <FaSave className="task-icon"/>
                                    </button>
                                    <button type="button" style={{background: 'none', border: 'none'}}>
                                        <MdCancel className="task-icon"/>
                                    </button>
                                </div>

                            </li>
                        </form> :

                        <li className="task">
                            <span className="task-text">{task.text}</span>
                            <div className="icon-container">
                                <button type="button" style={{background: 'none', border: 'none'}}>
                                    <IoIosCheckbox className="task-icon"/>
                                </button>
                                <button type="button" style={{background: 'none', border: 'none'}}>
                                    <FaEdit className="task-icon"/>
                                </button>
                                <button type="button" style={{background: 'none', border: 'none'}}>
                                    <FaTrashCan className="task-icon"/>
                                </button>
                            </div>
                        </li>
                )
                }
            </ul>

        </>
    )
        ;
};