import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";

export const TodoContainer = () => {
    const [tasks, setTasks] = React.useState([
        {id: uuidv4(), text: 'afsdfsdfsdf', isDone: false, editMode: false},
        {id: uuidv4(), text: 'fasdf', isDone: false, editMode: false},
        {id: uuidv4(), text: 'adff', isDone: false, editMode: false}
    ]);

    const [selectedTask, setSelectedTask] = React.useState({});

    const setEditMode = (id, mode = true) => {
        const temp = [...tasks];
        const index = temp.findIndex(q => q.id === id);
        temp[index].editMode = mode;
        setTasks([...temp]);
        setSelectedTask(temp[index]);
    }

    const saveTask = (item,mode) => {
        if (mode === "edit") {
            console.log(item)
            const temp = [...tasks];
            const index = temp.findIndex(q => q.id === item.id);
            temp[index].text = item.taskText;
            temp[index].editMode = false;
        }
    }

    return (
        <>

            <h1>Todo List</h1>

            <div style={{margin: '10px 0', opacity: 0.7}}>
                <p>plan your day</p>
            </div>

            <div style={{marginTop: '30px'}}>
                <TodoForm/>
            </div>

            <div style={{marginTop: '25px'}}>
                <TodoList data={tasks} editMode={setEditMode} selectedTask={selectedTask} save={saveTask}/>
            </div>

        </>
    );
};