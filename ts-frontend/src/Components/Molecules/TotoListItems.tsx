import React, {useState} from 'react'
import {Todo, useTodoContex} from "../../Page/TodoPage";

interface IProps {
    todo: Todo
}

const TodoListItemsLine = ({todo}: IProps) => {

    const { toggleStatus } = useTodoContex();

    return <>
        <li> <input type="checkbox" checked={todo.done} onChange={ e => toggleStatus(todo.id) } /> {todo.title}</li>
    </>

};

export const TodoListItems = () => {

    const { todoList } = useTodoContex();

    const [filter, setFilter] = useState('');

    const filtered = todoList.filter(e => e.title.toLowerCase().indexOf(filter.toLowerCase()) > -1);

    return (
        <>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {filtered.map(todo => <TodoListItemsLine todo={todo} />)}
            </ul>
            <pre> { JSON.stringify(filtered, null,4) } </pre>
        </>
    );
};
