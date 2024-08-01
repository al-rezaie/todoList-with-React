import React from 'react'
import {useForm} from 'react-hook-form'
import {IoIosCheckbox} from "react-icons/io";
import {FaTrashCan} from "react-icons/fa6";
import {FaEdit, FaSave} from "react-icons/fa";
import {MdCancel} from "react-icons/md";

export const TodoList = ({
                             data,
                             editMode,
                             selectedTask,
                             save,
                             remove,
                             completedTasks,
                             removeCompletedTask,
                             setDone
                         }) => {
    const {reset, register, handleSubmit, formState: {errors}} = useForm();
    const [toggleBtn, setToggleBtn] = React.useState(false);

    const submit = data => save(data, 'edit');

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

                        <div key={task.id}>
                            <form onSubmit={handleSubmit(submit)}>
                                <input type="hidden" {...register('id')}/>
                                <li className="task">
                                    <input {...register('taskText', {required: true})} type="text"
                                           className="task-input"/>
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
                            </form>
                        </div> :

                            <li className="task" key={task.id}>
                                <span className="task-text">{task.text}</span>
                                <div className="icon-container">
                                    <button onClick={() => setDone(task.id, false)} type="button"
                                            style={{background: 'none', border: 'none'}}>
                                        <IoIosCheckbox style={{color: 'deepskyblue'}} className="task-icon"/>
                                    </button>
                                    <button onClick={() => editMode(task.id)} type="button"
                                            style={{background: 'none', border: 'none'}}>
                                        <FaEdit style={{color: 'orange'}} className="task-icon"/>
                                    </button>
                                    <button onClick={() => remove(task.id)} type="button"
                                            style={{background: 'none', border: 'none'}}>
                                        <FaTrashCan style={{color: 'red', opacity: '0.9'}} className="task-icon"/>
                                    </button>
                                </div>
                            </li>
                )
                }
            </ul>

            {/*completed tasks*/}
            <button onClick={() => setToggleBtn(!toggleBtn)}
                    className="completed-list-toggler">{toggleBtn ? 'Hide Completed Tasks' : 'Show Completed Tasks'}</button>
            <div className={toggleBtn ? 'completed-container active' : 'completed-container inactive'}>
                <ul className="task-list completed-list">
                    {completedTasks.map(task =>
                        <li className="task" key={task.id}>
                            <span className="task-text">{task.text}</span>
                            <div className="icon-container">
                                <button onClick={() => setDone(task.id, true)} type="button"
                                        style={{background: 'none', border: 'none'}}>
                                    <IoIosCheckbox style={{color: 'deepskyblue'}} className="task-icon"/>
                                </button>
                                <button onClick={() => removeCompletedTask(task.id)} type="button"
                                        style={{background: 'none', border: 'none'}}>
                                    <FaTrashCan style={{color: 'red', opacity: '0.9'}} className="task-icon"/>
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