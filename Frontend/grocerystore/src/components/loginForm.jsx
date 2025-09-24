import React, { useState } from 'react';
import { Card, Button, Form, Input, Spin } from 'antd';
import logo from '../Assests/logo.png';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // ✅ Form submit handler
    const onFinish = async (values) => {
        setLoading(true);

        try {
            // ✅ Admin login
            if (values.email === 'admin@gmail.com' && values.password === '123456') {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'Welcome Muhammad 🎉',
                    confirmButtonColor: '#16a34a'
                });
                navigate('/AdminDashborad');
                return; // ✅ prevent API call after admin login
            }

            // ✅ Normal user login
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
                navigate('/'); // ✅ Redirect after successful login
            }

        } catch (err) {
            console.error("Login error:", err);
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
        console.log('Validation Failed:', errorInfo);
    };

    // ✅ Google Login
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:4000/api/user/authsystem/googleLogin";
    };

    return (
        <div className="flex items-start justify-center bg-cover bg-center mb-20" style={{ height: '70vh' }}>
            <div className="w-full max-w-md h-full">
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
                                <img src={logo} alt="Logo" className="w-[30%] md:w-[55%] h-auto" />
                            </div>

                            <div className="w-10"></div>
                        </div>
                    }
                    variant="borderless"
                    className="bg-white/20 border border-white/50 backdrop-blur-md shadow-lg text-white"
                    style={{ padding: '40px', maxHeight: '90vh', minHeight: '80vh' }}
                >
                    <Form
                        name="loginForm"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 19 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {/* Email */}
                        <Form.Item
                            label={<span className="text-white">Email</span>}
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input className="bg-white/40 text-black placeholder-gray-600" />
                        </Form.Item>

                        {/* Password */}
                        <Form.Item
                            label={<span className="text-white">Password</span>}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password className="bg-white/40 text-black placeholder-gray-600" />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-green-600 hover:bg-green-500 flex items-center justify-center ml-20"
                                disabled={loading}
                            >
                                {loading ? <Spin size="small" /> : "Submit"}
                            </Button>
                        </Form.Item>

                        {/* Google Login */}
                        <div className="text-center text-white w-full">
                            <hr />
                            <p className="my-3">OR</p>
                            <Button
                                className="w-full my-5 flex justify-center space-x-2"
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
