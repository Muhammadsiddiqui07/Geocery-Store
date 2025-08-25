import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main.jsx'
import Login from '../pages/login.jsx';
import Signup from '../pages/signup.jsx';
import AdminDash from '../pages/adminDash.jsx'



function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/AdminDashborad' element={<AdminDash />} />
            </Routes>
        </Router>
    );
}


export default MyRoutes