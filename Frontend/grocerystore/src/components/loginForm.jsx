import React, { useState } from 'react';
import { Card, Button, Form, Input, Spin } from 'antd';
import logo from '../Assests/logo.png';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ SweetAlert2

const LoginForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // ✅ Loader state

    // ✅ Form submit handler
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:4000/api/user/authsystem/login', {
                email: values.email,
                password: values.password,
            });

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'Welcome back 🎉',
                    confirmButtonColor: '#16a34a'
                });
                navigate('/dashboard');
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email or password!',
                confirmButtonColor: '#d33'
            });
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // ✅ Google Login
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:4000/api/user/authsystem/googleLogin";
    };

    return (
        <div
            className="flex items-start justify-center bg-cover bg-center mb-20"
            style={{ height: '70vh' }}
        >
            <div className="w-full max-w-md" style={{ width: '100%', height: '100%' }}>
                <Card
                    title={
                        <div className="flex items-center justify-between w-full">
                            {/* Back Button */}
                            <Button
                                type="link"
                                className="text-white underline"
                                onClick={() => navigate('/')}
                            >
                                ←
                            </Button>

                            {/* Logo */}
                            <div className="flex items-center justify-center space-x-3 mx-auto">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-[35%] md:w-[65%] h-auto"
                                />
                            </div>

                            <div className="w-10"></div>
                        </div>
                    }
                    variant="borderless"
                    className="bg-white/20 border border-white/50 backdrop-blur-md shadow-lg text-white"
                    style={{
                        width: '100%',
                        height: '100%',
                        padding: '40px',
                        maxHeight: '90vh',
                        minHeight: '80vh',
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
                            label={<span className="text-white">Email</span>}
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input className="bg-white/40 text-black placeholder-gray-600" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-white">Password</span>}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password className="bg-white/40 text-black placeholder-gray-600" />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-green-600 hover:bg-green-500 flex items-center justify-center"
                                disabled={loading}
                            >
                                {loading ? <Spin size="small" /> : "Submit"}
                            </Button>
                        </Form.Item>

                        <div className="text-center text-white w-full">
                            <hr />
                            <br />
                            OR
                            <br />
                            <Button
                                className="w-[90%] pt-2 flex items-center justify-center space-x-2"
                                onClick={handleGoogleLogin}
                            >
                                <FaGoogle />
                                <span>Login With Google</span>
                            </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default LoginForm;
