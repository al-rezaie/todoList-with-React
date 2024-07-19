import React from 'react'
import {useForm} from 'react-hook-form'
import {IoIosCheckbox} from "react-icons/io";
import {FaTrashCan} from "react-icons/fa6";
import {FaEdit, FaSave} from "react-icons/fa";
import {MdCancel} from "react-icons/md";

export const TodoList = ({data, editMode, selectedTask, save, remove}) => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm();

    const submit = data => save(data,'edit');

    React.useEffect(() => {
        reset(
            {id: selectedTask.id, taskText: selectedTask.text}
        )
    }, [selectedTask]);


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
                                    <IoIosCheckbox className="task-icon"/>
                                </button>
                                <button onClick={() => editMode(task.id)} type="button"
                                        style={{background: 'none', border: 'none'}}>
                                    <FaEdit className="task-icon"/>
                                </button>
                                <button onClick={() => remove(task.id)} type="button"
                                        style={{background: 'none', border: 'none'}}>
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