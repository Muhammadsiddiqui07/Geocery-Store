import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main.jsx'
import Login from '../pages/login.jsx';
import Signup from '../pages/signup.jsx';
import AdminDash from '../pages/adminDash.jsx'
import CategoriesPage from '../pages/categories.jsx'
import ProductsPage from '../pages/products.jsx';



function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/AdminDashborad' element={<AdminDash />} />
                <Route path='/categories' element={<CategoriesPage />} />
                <Route path='/products' element={<ProductsPage />} />
            </Routes>
        </Router>
    );
}


export default MyRoutes