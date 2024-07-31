import React from 'react'
import {v4 as uuidv4} from 'uuid'
import swal from 'sweetalert';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";

export const TodoContainer = () => {
    const [tasks, setTasks] = React.useState([
        {id: uuidv4(), text: 'hi', isDone: false, editMode: false},
        {id: uuidv4(), text: 'hello', isDone: false, editMode: false},
        {id: uuidv4(), text: 'hey', isDone: false, editMode: false}
    ]);

    const [completedTasks, setCompletedTasks] = React.useState([
        {id: uuidv4(), text: 'done', isDone: true},
        {id: uuidv4(), text: 'done', isDone: true},
        {id: uuidv4(), text: 'done', isDone: true},
        {id: uuidv4(), text: 'done', isDone: true}
    ]);

    const [selectedTask, setSelectedTask] = React.useState({});

    const setEditMode = (id, mode = true) => {
        const temp = [...tasks];
        const index = temp.findIndex(q => q.id === id);
        temp[index].editMode = mode;
        setTasks([...temp]);
        setSelectedTask(temp[index]);
    }

    const saveTask = (item, mode) => {
        if (mode === "edit") {
            const temp = [...tasks];
            const index = temp.findIndex(q => q.id === item.id);
            temp[index].text = item.taskText;
            temp[index].editMode = false;
            setTasks([...temp])
        } else {
            const newTask = {id: uuidv4(), text: item.taskText, isDone: false, editMode: false};
            setTasks([...tasks, newTask]);
        }
    }

    const removeTask = id => {
        swal({
            title: 'Are you sure ?',
            text: 'Are you sure that you want to delete this task ?',
            icon: 'warning',
            dangerMode: true,
            buttons: ['yes', 'no']
        })
            .then(willDelete => {
                if (!willDelete) {
                    setTasks([...tasks].filter(q => q.id !== id));
                    toast.success('Task Deleted Successfully', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true
                    })
                }
            })
    }
    const removeCompletedTask = id => {
        swal({
            title: 'Are you sure ?',
            text: 'Are you sure that you want to delete this task ?',
            icon: 'warning',
            dangerMode: true,
            buttons: ['yes', 'no']
        })
            .then(willDelete => {
                if (!willDelete) {

                    setCompletedTasks([...completedTasks].filter(q => q.id !== id));
                    toast.success('Task Deleted Successfully', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true
                    })
                }
            })
    }

    const setDone = (id,mode) => {
        if (mode) {
            //set isDone to false
            let task = completedTasks.find(q => q.id === id);
            setCompletedTasks([...tasks].filter(q => q.id !== id));
            task.editMode = false;
            task.isDone = false;
            setTasks([...tasks, task]);
            toast.success('The operation was successfully done', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            });
        } else {
            //set isDone to true
            let task = tasks.find(q => q.id === id);
            setTasks([...tasks].filter(q => q.id !== id));
            delete task.editMode;
            task.isDone = true;
            setCompletedTasks([...completedTasks, task]);
            toast.success('Task Done Successfully', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            });

        }
    }

    return (
        <>

            <ToastContainer/>
            <h1>Todo List</h1>

            <div style={{margin: '10px 0', opacity: 0.7}}>
                <p>plan your day</p>
            </div>

            <div style={{marginTop: '30px'}}>
                <TodoForm save={saveTask}/>
            </div>

            <div style={{marginTop: '25px'}}>
                <TodoList data={tasks} remove={removeTask} removeCompletedTask={removeCompletedTask}
                          editMode={setEditMode} selectedTask={selectedTask}
                          save={saveTask} completedTasks={completedTasks} setDone={setDone}/>
            </div>

        </>
    );
};