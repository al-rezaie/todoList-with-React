import React from 'react'
import {useForm} from 'react-hook-form'
import {IoIosCheckbox} from "react-icons/io";
import {FaTrashCan} from "react-icons/fa6";
import {FaEdit, FaSave} from "react-icons/fa";
import {MdCancel} from "react-icons/md";

export const TodoList = ({data, editMode, selectedTask, save, remove, completedTasks}) => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm();

    const submit = data => save(data, 'edit');

    React.useEffect(() => {
        reset(
            {id: selectedTask.id, taskText: selectedTask.text}
        )
    }, [selectedTask]);

    const toggleCompletedTasks = () => {
        const completedContainer = document.querySelector('.completed-container');
        const toggleBtn = document.querySelector('.completed-list-toggler');

        if (completedContainer.style.maxHeight) {
            completedContainer.style.maxHeight = null;
            toggleBtn.innerHTML = "Show Completed Tasks";
        } else {
            completedContainer.style.maxHeight = completedContainer.scrollHeight + 'px'
            toggleBtn.innerHTML = "Hide Completed Tasks";
        }
    }


    return (
        <>

            <ul className="task-list">
                {data.map(task =>
                    task.editMode ?

                        <form onSubmit={handleSubmit(submit)}>
                            <input type="hidden" {...register('id')}/>
                            <li className="task">
                                <input {...register('taskText', {required: true})} type="text" className="task-input"/>
                                {errors.taskText && <span style={{color: 'red'}}>this form is required</span>}
                                <div className="icon-container">
                                    <button type="submit" style={{background: 'none', border: 'none'}}>
                                        <FaSave className="task-icon"/>
                                    </button>
                                    <button onClick={() => editMode(task.id, false)} type="button"
                                            style={{background: 'none', border: 'none'}}>
                                        <MdCancel className="task-icon"/>
                                    </button>
                                </div>

                            </li>
                        </form> :

                        <li className="task">
                            <span className="task-text">{task.text}</span>
                            <div className="icon-container">
                                <button type="button" style={{background: 'none', border: 'none'}}>
                                    <IoIosCheckbox style={{color:'deepskyblue'}} className="task-icon"/>
                                </button>
                                <button onClick={() => editMode(task.id)} type="button"
                                        style={{background: 'none', border: 'none'}}>
                                    <FaEdit style={{color:'orange'}} className="task-icon"/>
                                </button>
                                <button onClick={() => remove(task.id)} type="button"
                                        style={{background: 'none', border: 'none'}}>
                                    <FaTrashCan style={{color:'red', opacity:'0.9'}} className="task-icon"/>
                                </button>
                            </div>
                        </li>
                )
                }
            </ul>

            {/*completed tasks*/}
            <button onClick={toggleCompletedTasks} className="completed-list-toggler">Show Completed Tasks</button>
            <div className="completed-container">
                <ul className="task-list completed-list">
                    {completedTasks.map(task =>
                        <li className="task">
                            <span className="task-text">{task.text}</span>
                            <div className="icon-container">
                                <button type="button" style={{background: 'none', border: 'none'}}>
                                    <IoIosCheckbox style={{color:'deepskyblue'}} className="task-icon"/>
                                </button>
                                <button onClick={() => remove(task.id)} type="button"
                                        style={{background: 'none', border: 'none'}}>
                                    <FaTrashCan style={{color:'red', opacity:'0.9'}} className="task-icon"/>
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>

        </>
    )
        ;
};