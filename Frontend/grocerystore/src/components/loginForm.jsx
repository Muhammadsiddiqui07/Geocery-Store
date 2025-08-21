import React from 'react';
import { Card } from 'antd';
import { Button, Form, Input } from 'antd';
import logo from '../Assests/logo.png';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
    const navigate = useNavigate();

    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div
            className="flex items-start justify-center bg-cover bg-center mb-20"
            style={{ height: '70vh' }}
        >
            <div
                className="w-full max-w-md"
                style={{ width: '100%', height: '100%' }}
            >
                <Card
                    title={
                        <div className="flex items-center justify-between w-full">
                            {/* Back Button - Left Side */}
                            <Button
                                type="link"
                                className="text-white underline"
                                onClick={() => navigate('/')}
                            >
                                ←
                            </Button>

                            {/* Center Logo + Login */}
                            <div className="flex items-center justify-center space-x-3 mx-auto">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-[35%] md:w-[65%] h-auto"
                                />
                            </div>


                            {/* Right Side Placeholder for Balance */}
                            <div className="w-10"></div>
                        </div>
                    }

                    variant="borderless"
                    className="bg-white/20 border border-white/50 backdrop-blur-md shadow-lg text-white w-100"
                    style={{
                        width: '100%',
                        height: '100%',
                        padding: '40px',
                        maxHeight: '90vh', // Mobile overflow fix
                        minHeight: '80vh'
                    }}
                >
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label={<span className="text-white">Username</span>}
                            name="username"
                            rules={[
                                { required: true, message: 'Please input your username!' },
                            ]}
                        >
                            <Input className="bg-white/40 text-black placeholder-gray-600" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-white">Password</span>}
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your password!' },
                            ]}
                        >
                            <Input.Password className="bg-white/40 text-black placeholder-gray-600" />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-green-600 hover:bg-green-500"
                            >
                                Submit
                            </Button>
                        </Form.Item>

                        <div className='text-center text-white'>
                            <hr />
                            <br />
                            OR
                            <br />
                            <Button className='w-[85%]' color="default" variant="outlined">
                                <FaGoogle />
                                Login With Google
                            </Button>

                        </div>


                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default LoginForm;
