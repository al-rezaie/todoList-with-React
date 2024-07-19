import React from 'react'
import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";

export const TodoContainer = () => {
    return (
        <>

            <h1>Todo List</h1>

            <div style={{margin: '10px 0', opacity:0.7}}>
                <p>plan your day</p>
            </div>

            <div style={{marginTop: '30px'}}>
                <TodoForm/>
            </div>

            <div style={{marginTop: '25px'}}>
                <TodoList/>
            </div>

        </>
    );
};