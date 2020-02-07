import React from 'react'
import {TodoListItems} from "../Molecules/TodoListItems";
import {TodoInput} from "../Molecules/TodoInput";
import {Todo} from "../../Hooks/useTodoContext";

interface IProps {
    addTodoList: (title: string ) => void
    todoList: Todo[]
}

export const TodoTemplate:React.FC<IProps>  = (props) => {
    return (
        <>
            <TodoInput addTodoList={props.addTodoList}/>
            <TodoListItems todoList={props.todoList}/>
        </>
    );
};
