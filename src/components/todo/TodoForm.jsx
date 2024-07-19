import React from 'react'
import {CiSearch} from "react-icons/ci";
import {useForm} from "react-hook-form";

export const TodoForm = ({save}) => {

    const {reset, register, handleSubmit, formState: {errors}} = useForm();

    const submit = data => {
        save(data,'insert');
        reset({taskText:''});
    };

    return (
        <>

            <form onSubmit={handleSubmit(submit)}>
                <div className="form-container">
                    <input type="hidden" {...register('id')}/>
                    <input {...register('taskText', {required: true})} type="text" className="task-input"/>
                    {errors.taskText && <span style={{color: 'red'}}>This field is required</span>}
                    <button type="button" className="input-icon" style={{background: 'none', border: 'none'}}>
                        <CiSearch className="input-icon"/>
                    </button>
                    <button type="submit" className="submit-btn">Add</button>
                </div>
            </form>

        </>
    );
};