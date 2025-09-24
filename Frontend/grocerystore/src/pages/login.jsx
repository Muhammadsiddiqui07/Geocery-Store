import backgroundImage from '../Assests/back.png';
import LoginForm from '../components/loginForm';

function Login() {
    return (
        <div className="bg-gray-900 min-h-screen flex md:h-full sm:h-full"> 
            <div className="relative isolate px-6 pt-14 lg:px-8 flex-1 flex items-center justify-center ">

                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 overflow-hidden"
                >
                    <img
                        src={backgroundImage}
                        alt="Background Grocery"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                <div className="w-full  px-4 sm:px-6 lg:px-8">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;
