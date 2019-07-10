import React, {useState} from 'react'
import {useTodoContex} from "../../Page/TodoPage";


export const TodoInput = () => {

    const {addTodoList} = useTodoContex();
    const [value, setValue] = useState('');

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={e => {
                addTodoList(value)
                setValue('')
            }}>+
            </button>
        </div>
    );
};
