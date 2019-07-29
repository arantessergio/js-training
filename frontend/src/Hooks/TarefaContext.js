import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const TodoCtx = createContext({})

export const TodoProvider = ({children}) => {
    const [elem, setElem] = useState([{id: '123', description: 'teste', isCompleted: false},{id: '1234', description: 'teste 2', isCompleted: false}])
    /*useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:3001/todos/'
            const res = await axios.get(url)
            console.log(res)
            console.log(res.data)
        }
        fetchData()
    })*/
    return(
        <>
            <TodoCtx.Provider value={{todoList: elem, setTodoList: setElem}}>
                {children}
            </TodoCtx.Provider>
        </>
    )
}