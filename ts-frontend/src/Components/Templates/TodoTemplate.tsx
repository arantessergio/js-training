import React from 'react'
import {TodoListItems} from "../Molecules/TotoListItems";
import {TodoInput} from "../Molecules/TodoInput";

interface IProps {
}

export const TodoTemplate = (props: IProps) => {
    return (
        <>
            <TodoInput/>
            <TodoListItems/>
        </>
    );
};
