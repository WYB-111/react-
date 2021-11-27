import React, { Component } from 'react'
import './login.less';
import { Row, Col, Form, Button, Input, Checkbox } from 'antd';
export default class login extends Component {
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div className='login'>
                <div className='conent'>
                    <Row justify='center'>
                        <h2 >GYY的篮球乐园🏀</h2>
                    </Row>
                    <Row justify='center'>
                        <h4 style={{ color: 'rgba(0,0,0,.45)' }}>全世界最美丽善良温柔可爱的女生的小男朋友开发的后台</h4>
                    </Row>
                    <Row justify='center'>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 24 }}
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                colon
                                rules={[{ required: true, message: 'Please input your username!' }]}

                            >
                                <Input style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                            </Form.Item>

                            <Form.Item
                                colon

                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Row>
                </div>
            </div>
        )
    }
}
