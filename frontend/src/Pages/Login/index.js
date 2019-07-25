import React, { useState } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
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
                const login = {
                    email: form.username,
                    password: form.password
                }
                const url = 'http://localhost:3001/users/auth'

                const res = await Axios.post(url, login)

                console.log(res)
                console.log(res.data)

                window.localStorage.setItem('login', res.data._id)
                console.log('Recebendo Valores: ', form)
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
                    <a className='login-form-forgot' id='texto' href=''>
                        Esquesci senha
                    </a>
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                    >
                        Log in
                    </Button>
                    <a href="">Registrar-se!</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export const CreateAccount = Form.create({ name: 'login' })(Login)
