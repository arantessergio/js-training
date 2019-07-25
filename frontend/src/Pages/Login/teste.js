import React, { useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const Register = (props) => {
    const { getFieldDecorator, getFieldValue } = props.form;

    const handleSubmit = (event) => {
        event.preventDefault()
        props.form.validateFieldsAndScroll(async (err, values) => {
            if(!err) {
                console.log('Received values of form: ', values);
                const user = {name: values.name, email: values.email, password: values.password}

                const url = 'http://localhost:3001/users/'
    
                const res = await axios.post(url, user)
                console.log(res)
                console.log(res.data)
                window.localStorage.setItem('agenda', res.data._id)
            } else {

            }
        })
    }
    const handlePassword = (rule, value, callback) => {
        if(value) {
            props.form.validateFields(['confirm'])
        }
        callback()
    }
    const handleConfirmPassword = (rule, value, callback) => {
        if(getFieldValue('password') !== getFieldValue('confirm')) {
            callback('Senhas diferentes')
        }else{
            callback()
        }
    }
    useEffect(() => {
        console.log(window.localStorage.getItem('agenda'))
    })
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

    return (
        
            <Form {...formItemLayout} onSubmit={handleSubmit}>
                <Form.Item label="Nome">
                    {getFieldDecorator('name', {
                        rules: [
                        {
                            required: true,
                            message: 'Por favor coloque seu nome!',
                            whitespace: true
                        }
                        ],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [
                        {
                            type: 'email',
                            message: 'E-mail não válido!',
                        },
                        {
                            required: true,
                            message: 'Por favor coloque seu E-mail!',
                        },
                        ],
                    })(<Input />)}
                </Form.Item>
                
                <Form.Item label="Senha" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                        {
                            required: true,
                            message: 'Por favor coloque sua senha!',
                        },
                        {
                            validator: handlePassword
                        }
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="Confirme sua senha" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                        {
                            required: true,
                            message: 'Por favor confirme sua senha!',
                        },
                        {
                            validator: handleConfirmPassword,
                        }
                        ],
                    })(<Input.Password/>)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Registrar</Button>
                </Form.Item>
            </Form>
        
    )
}

export const CreateAccount = Form.create({ name: 'register' })(Register);