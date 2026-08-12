import React, { useState } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { FaGoogle, FaEnvelope, FaLock, FaArrowLeft, FaLeaf, FaKey } from "react-icons/fa";
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../Assests/logo.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleDemoAdmin = () => {
        form.setFieldsValue({
            email: 'admin@gmail.com',
            password: '123456'
        });
    };

    const onFinish = async (values) => {
        setLoading(true);

        try {
            // Admin login shortcut check
            if (values.email === 'admin@gmail.com' && values.password === '123456') {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome Back, Admin!',
                    text: 'Redirecting to your Admin Portal...',
                    timer: 1500,
                    showConfirmButton: false
                });
                setTimeout(() => navigate('/AdminDashborad'), 1500);
                return;
            }

            // User login API call
            const res = await axios.post('http://localhost:4000/api/user/authsystem/login', {
                email: values.email,
                password: values.password,
            });

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'Welcome back to FreshMart 🎉',
                    timer: 1500,
                    showConfirmButton: false
                });
                setTimeout(() => navigate('/'), 1500);
            }

        } catch (err) {
            console.error("Login error:", err);
            Swal.fire({
                icon: 'error',
                title: 'Authentication Failed',
                text: 'Invalid email or password. Please try again!',
                confirmButtonColor: '#10b981'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:4000/api/user/authsystem/googleLogin";
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Card Container */}
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 shadow-2xl space-y-6 text-slate-800">
                
                {/* Back to Home Link */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition"
                    >
                        <FaArrowLeft size={12} />
                        <span>Back to Store</span>
                    </button>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        <FaLeaf /> Organic & Fresh
                    </span>
                </div>

                {/* Header Logo & Title */}
                <div className="text-center space-y-2 pt-2">
                    <img src={logo} alt="FreshMart Logo" className="h-16 w-auto mx-auto object-contain" />
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h2>
                    <p className="text-xs text-slate-500">Sign in to manage your grocery orders & delivery</p>
                </div>

                {/* Demo Credentials Quick Button */}
                <div className="bg-emerald-50 border border-emerald-200/60 p-3 rounded-2xl flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                        <FaKey className="text-emerald-600 text-sm" />
                        <div>
                            <p className="font-bold text-emerald-900">Demo Admin Account</p>
                            <p className="text-[10px] text-emerald-700">admin@gmail.com • 123456</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleDemoAdmin}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow transition"
                    >
                        Autofill
                    </button>
                </div>

                {/* Login Form */}
                <Form
                    form={form}
                    name="loginForm"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                    className="space-y-4"
                >
                    {/* Email Input */}
                    <Form.Item
                        label={<span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</span>}
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email address!' }]}
                    >
                        <Input
                            prefix={<FaEnvelope className="text-slate-400 mr-2 text-xs" />}
                            placeholder="your.email@example.com"
                            className="py-2.5 rounded-xl text-sm border-slate-200 hover:border-emerald-400 focus:border-emerald-500"
                        />
                    </Form.Item>

                    {/* Password Input */}
                    <Form.Item
                        label={
                            <div className="flex justify-between items-center w-full">
                                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Password</span>
                                <a href="#" className="text-[11px] text-emerald-600 hover:underline font-semibold">Forgot?</a>
                            </div>
                        }
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password
                            prefix={<FaLock className="text-slate-400 mr-2 text-xs" />}
                            placeholder="••••••••"
                            className="py-2.5 rounded-xl text-sm border-slate-200 hover:border-emerald-400 focus:border-emerald-500"
                        />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item className="pt-2">
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={loading}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold h-11 rounded-xl shadow-lg shadow-emerald-200 border-none transition-all flex items-center justify-center gap-2"
                        >
                            {loading ? <Spin size="small" /> : "Sign In to FreshMart"}
                        </Button>
                    </Form.Item>
                </Form>

                {/* Divider */}
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-3 text-slate-400 font-semibold">Or continue with</span>
                    </div>
                </div>

                {/* Google Sign In */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2.5 transition border border-slate-200"
                >
                    <FaGoogle className="text-rose-500 text-sm" />
                    <span>Sign in with Google</span>
                </button>

                {/* Footer Switch to Signup */}
                <p className="text-center text-xs text-slate-500 pt-2">
                    Don't have an account?{' '}
                    <NavLink to="/signup" className="text-emerald-600 font-bold hover:underline">
                        Create free account
                    </NavLink>
                </p>

            </div>
        </div>
    );
};

export default LoginForm;

