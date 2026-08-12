import React from 'react';
import backgroundImage from '../Assests/back.png';
import LoginForm from '../components/loginForm';

function Login() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4 relative overflow-hidden">
            {/* Background image & gradient overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt="Background Grocery"
                    className="w-full h-full object-cover opacity-20 filter blur-xs"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/90 via-slate-900/90 to-emerald-900/80" />
            </div>

            {/* Login Card Content */}
            <div className="relative z-10 w-full">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;

