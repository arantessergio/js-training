import React, {useState} from 'react'
import {Todo, useTodoContext} from "../../Hooks/useTodoContext";


const TodoListItemsLine = ({todo}: { todo: Todo }) => {

    const { toggleStatus } = useTodoContext();

    return <>
        <li> <input type="checkbox" checked={todo.done} onChange={ e => toggleStatus(todo.id) } /> {todo.title}</li>
    </>

};

interface IProps {
    todoList: Todo[]
}

export const TodoListItems: React.FC<IProps> = ({todoList}) => {

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
