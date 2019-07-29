import React, { useState } from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import 'antd/dist/antd.css'
import './Login.css'
import Axios from 'axios'

const Login = props => {
    const { getFieldDecorator } = props.form

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const updateField = (key, value) => {
        const frm = Object.assign({}, form)
        frm[key] = value.target.value
        setForm(frm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.form.validateFieldsAndScroll(async error => {
            if (!error) {
                const response = await Axios({
                    method: 'POST',
                    url: 'http://localhost:3001/users/auth',
                    data: {
                        email: form.username,
                        password: form.password
                    }
                })

                if (response.data.error) {
                    message.error('Email ou senha invalidos')
                } else {
                    console.log(response.data)
                    localStorage.setItem('login', response.data._id)
                    props.history.push('/')
                    console.log('Recebendo Valores: ', form)
                }

            } else {
                message.error('Por favor preencha os campos!')
            }
        })
    }

    return (
        <div className='login'>
            <Form onSubmit={handleSubmit} className='login-form'>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: 'Por Favor insira seu email!'
                            }
                        ]
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type='user'
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            placeholder='Digite seu email'
                            onChange={value => updateField('username', value)}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Por Favor insira sua Senha!'
                            }
                        ]
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type='lock'
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            type='password'
                            placeholder='Digite sua senha'
                            onChange={value => updateField('password', value)}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(<Checkbox>Lembrar login</Checkbox>)}
                    <a className='login-form-forgot'>Esqueci senha</a>
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                    >
                        Log in
                    </Button>
                    <a>Registrar-se!</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export const LoggingAccount = Form.create({ name: 'login' })(Login)
