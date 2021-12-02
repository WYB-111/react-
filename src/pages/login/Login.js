import React, { useEffect, useRef } from 'react'
import './login.less';
import { Row, Col, Form, Button, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const Login = () => {
    const [form] = Form.useForm()
    const { getFieldValue, setFieldsValue } = form
    const formRef = useRef(null)
    const register = () => {
    }
    const login = () => {
        // console.log(getFieldValue('username'), "账号：")
        // console.log(getFieldValue('password'), '密码');
        form.validateFields(['username']);
        form.validateFields(['password']);
    }
    return (
        <div className={'login'}>
            <div className={'conent'}>
                <Row justify='center'>
                    <h2 >GYY的篮球乐园🏀</h2>
                </Row>
                <Row justify='center'>
                    <h4 style={{ color: 'rgba(0,0,0,.7)', marginBottom: '33px' }}>全世界最美丽善良温柔可爱的女生的小男朋友开发的后台</h4>
                </Row>
                <Row justify='center'>
                    <Form
                        form={form}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Form.Item
                            validateFirst={true}
                            colon
                            rules={[
                                { required: true, message: '请输入用户名/账号' },
                                { min: 4, message: '用户名/账号最少4位' },
                                { max: 12, message: '用户名/账号最少12位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名/账号必须是英文数字下划线组成' }
                            ]}

                            name={'username'}
                        >
                            {/* {getFieldDecorator('r_confirmPassword')()} */}
                            <Input allowClear prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名/账号' />
                        </Form.Item>
                        <Form.Item
                            validateFirst={true}
                            colon
                            name={'password'}
                            rules={[
                                {
                                    required: true,
                                    message: "请输入密码"
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, val, callback) {
                                        if (val?.length <= 3) {
                                            callback('密码最少4位');
                                        }
                                        else if (val?.length >= 11) {
                                            callback('密码最多12位');
                                        }
                                        else if (!/^[a-zA-Z0-9_]+$/.test(val)) {
                                            callback('密码必须是英文数字下划线组成');
                                        } else {
                                            callback()
                                        }
                                    }
                                })
                            ]}
                        >
                            <Input.Password allowClear prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码' />
                        </Form.Item>
                        <Col span={24}>
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                        </Col>
                    </Form>
                </Row>
                <Row justify='center'>
                    <Col span={12} align={'right'}>
                        <Button onClick={register}>
                            注册
                        </Button>

                    </Col>
                    <Col span={12}>
                        <Button type="primary" onClick={login}>
                            登录
                        </Button>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Login