import React, { useContext, useState, FormEvent } from 'react';
import { TodoCtx } from '../../Hooks/TarefaContext';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export const TarefaInput = () => {
    const ctx = useContext(TodoCtx)
    const [item, setItem] = useState('')

    const handleChange = (e) => {
        setItem(e)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        ctx.setTodoList([...ctx.todoList,{
            id: '',
            description: item,
            isCompleted: false,
        }])
        //const url = 'http://localhost:3001/todos/'
        //const res = await axios.post(url,{description: item, isCompleted: false})
        //console.log(res)
        //console.log(res.data)
        setItem('')
    }

    return (
        <>
            <Link to="/"><Button>Home</Button></Link>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => handleChange(e.target.value)}/>
                <input type="submit" value="+"/>
            </form>  
        </>
    )
}