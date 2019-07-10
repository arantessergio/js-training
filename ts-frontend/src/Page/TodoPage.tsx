import React, {createContext, ReactNode, useContext, useState} from 'react'
import {TodoTemplate} from "../Components/Templates/TodoTemplate";

export interface Todo {
    id: number
    title: string
    done: boolean
}

interface IContext {
    todoList: Todo[];
    setTodoList: (v: Todo[] ) => void;
    addTodoList: (title: string ) => void;
    toggleStatus: (id: number) => void;
}

const ctx = createContext<IContext>({} as IContext);

export const useTodoContex = () => useContext(ctx);

let lastId = 0;
const nextId = () => ++lastId;

const initialState: Todo[] = [
    {
        id: nextId(),
        title: 'title one',
        done: false
    },
    {
        id: nextId(),
        title: 'title two',
        done: true
    }
];

const TodoListProvider: React.FC = ({children}) => {

    const [todoList, setTodoList] = useState<Todo[]>(initialState)

    const value: IContext = {
        todoList,
        setTodoList,
        addTodoList: (title) => setTodoList([...todoList , {id: nextId(), title, done: false}]),
        toggleStatus: id => {
            const item = todoList.find(e => e.id === id);
            if(item){
                item.done = !item.done
            }
            setTodoList([...todoList])
        },
    }

    return (
        <ctx.Provider value={value}>
            {children}
        </ctx.Provider>
    )
}


export const TodoPage = () => {
    return (
        <TodoListProvider>
            <TodoTemplate/>
        </TodoListProvider>

    )
}
