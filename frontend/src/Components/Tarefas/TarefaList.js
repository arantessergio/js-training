import React, { useContext } from 'react'
import { TodoCtx } from '../../Hooks/TarefaContext';
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export const TarefaList = () => {
    const ctx = useContext(TodoCtx)

    const handleCheckbox = (id) => {
        const elem = ctx.todoList.find(i => i.id === id)
        if(elem) elem.isCompleted = !elem.isCompleted
        ctx.setTodoList([...ctx.todoList])
    }

    return (
        <>
        <Link to="/"><Button>Home</Button></Link>
        {ctx.todoList.map(i =>
            <li key={i.id} style={i.isCompleted ? {textDecoration: 'line-through'} : {textDecoration: ''}}>
                <input type="checkbox" checked={i.isCompleted} onChange={e => handleCheckbox(i.id)}/>
                    {i.description}
            </li>
        )}
        </>
    )
}