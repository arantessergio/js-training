import React, { useContext } from 'react'
import { TodoCtx } from '../../Hooks/TarefaContext'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export const TarefaList = () => {
    const ctx = useContext(TodoCtx)

    const handleCheckbox = id => {
        const elem = ctx.todoList.find(i => i.id === id)
        if (elem) elem.isCompleted = !elem.isCompleted
        ctx.setTodoList([...ctx.todoList])
    }

    return (
        <>
            <Link to='/'>
                <Button>Home</Button>
            </Link>

            <table border='5'>
                <tr>
                    <th>Descrição</th>
                    <th>Data</th>
                </tr>
                <tr>
                    <td>
                        {ctx.todoList.map(i => (
                            <ul
                                key={i.id}
                                style={
                                    i.isCompleted
                                        ? { textDecoration: 'line-through' }
                                        : { textDecoration: '' }
                                }
                            >
                                <input
                                    type='checkbox'
                                    checked={i.isCompleted}
                                    onChange={e => handleCheckbox(i.id)}
                                />
                                {i.description}
                            </ul>
                        ))}
                    </td>
                    <td>
                        {ctx.todoList.map(i => (
                           <ul
                           key={i.id}
                                style={
                                    i.isCompleted
                                        ? { textDecoration: 'line-through' }
                                        : { textDecoration: '' }
                                }
                           >
                                {i.date}
                           </ul> 
                        ))}
                    </td>
                </tr>
            </table>
        </>
    )
}
