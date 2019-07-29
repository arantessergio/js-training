import React, { useContext, useState, FormEvent } from 'react';
import { TodoCtx } from '../../Hooks/TarefaContext';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Form, Input, Button, DatePicker } from 'antd'

export const TodoInput = (props) => {
    const { getFieldDecorator } = props.form;
    const ctx = useContext(TodoCtx)

    const formItemLayout = {
        labelCol: {
            lg: { span: 8 },
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {   
            lg: { span: 8 },
            xs: { span: 8 },
            sm: { span: 8 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            lg: {
                span: 12,
                offset: 8,
            },
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 14,
                offset: 8,
            },
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFieldsAndScroll(async (err, values) => {
            if(!err) {      
                values = {
                    ...values,
                    'date-picker': values['date-picker'].format('YYYY-MM-DD')
                }
                const agenda = window.localStorage.getItem('agenda')
                const url = 'http://localhost:3001/schedules/' + agenda + '/todos'
                const res = await axios.post(url,{description: values.description, time: values['date-picker']})
                ctx.setTodoList([...ctx.todoList,{
                    id: res.data._id,
                    description: values.description,
                    isCompleted: false,
                }])
                console.log(res.data)
            }
        }) 
    }

    return (
        <>
            <Link to="/"><Button>Home</Button></Link>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
                <Form.Item label="Descrição">
                    {getFieldDecorator('description', {
                        rules: [
                        {
                            required: true,
                            message: 'Por favor coloque uma descrição!',
                            whitespace: true
                        }
                        ],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Data">
                    {getFieldDecorator('date-picker', {
                        rules: [
                        { 
                            type: 'object', required: true, message: 'Por favor selecione uma data!' 
                        }
                        ]
                    })(<DatePicker />)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Criar</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export const TarefaInput = Form.create({ name: 'input' })(TodoInput)