import React from 'react'
import {TodoTemplate} from "../Components/Templates/TodoTemplate";
import {TodoListProvider, useTodoContext} from "../Hooks/useTodoContext";

const TemplateWithProps: React.FC = () => {
    const ctx = useTodoContext();

    return <TodoTemplate
        addTodoList={ctx.addTodoList}
        todoList={ctx.todoList}
    />
}

export const TodoPage = () => {

    return (
        <TodoListProvider>
            <TemplateWithProps/>
        </TodoListProvider>

    )
}
