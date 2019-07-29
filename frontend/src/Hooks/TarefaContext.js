import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const TodoCtx = createContext({})

export const TodoProvider = ({children}) => {
    const [elem, setElem] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const agenda = window.localStorage.getItem('agenda')
            const url = 'http://localhost:3001/schedules/' + agenda + '/todos'
            const res = await axios.get(url)
            res.data.map(i => setElem(e => [...e, {
                id: i._id,
                description: i.description,
                time: i.time,
                isCompleted: i.done,
            }]))
        }
        if(window.localStorage.getItem('agenda'))
            fetchData()
    }, [])

    return(
        <>
            <TodoCtx.Provider value={{todoList: elem, setTodoList: setElem}}>
                {children}
            </TodoCtx.Provider>
        </>
    )
}