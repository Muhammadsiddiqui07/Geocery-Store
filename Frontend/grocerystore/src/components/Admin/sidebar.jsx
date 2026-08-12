import React, { useState } from "react";
import { 
  FaBars, 
  FaTimes, 
  FaChartPie, 
  FaBox, 
  FaUsers, 
  FaShoppingBasket, 
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaHome,
  FaUserShield
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../Assests/logo.png";

// Content components
import DashboardContent from "./dashboardContent";
import AddProduct from "./addProduct";
import ShowUser from "./userAccess";
import Orders from "./order";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("DashboardContent");
    const navigate = useNavigate();

    const menuItems = [
        { id: "DashboardContent", label: "Dashboard", icon: <FaChartPie className="text-lg" /> },
        { id: "addProduct", label: "Product Catalog", icon: <FaBox className="text-lg" /> },
        { id: "orders", label: "Order Management", icon: <FaShoppingBasket className="text-lg" /> },
        { id: "showUser", label: "User Access", icon: <FaUsers className="text-lg" /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "addProduct":
                return <AddProduct />;
            case "orders":
                return <Orders />;
            case "showUser":
                return <ShowUser />;
            default:
                return <DashboardContent />;
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-900 text-slate-100 font-sans">
            
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Navigation */}
            <aside
                className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div>
                    {/* Brand Header */}
                    <div className="flex items-center justify-between p-5 border-b border-slate-800">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                            <div>
                                <h1 className="font-extrabold text-lg text-white tracking-tight">FreshMart</h1>
                                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                                    Admin Control
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="md:hidden text-slate-400 hover:text-white p-1"
                        >
                            <FaTimes size={18} />
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="p-4 space-y-1.5">
                        <div className="text-[10px] uppercase font-bold text-slate-500 px-3 pb-2 tracking-wider">
                            Main Menu
                        </div>
                        {menuItems.map((item) => {
                            const isActive = activeTab === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl font-semibold text-sm transition-all ${
                                        isActive
                                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40"
                                            : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                                    }`}
                                >
                                    <span className={isActive ? "text-white" : "text-slate-400"}>
                                        {item.icon}
                                    </span>
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Footer Controls & User Pill */}
                <div className="p-4 border-t border-slate-800 space-y-3">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition border border-slate-800"
                    >
                        <FaHome className="text-emerald-400" />
                        <span>Return to Storefront</span>
                    </button>

                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                                AD
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="text-xs font-bold text-white truncate">Muhammad Admin</h4>
                                <p className="text-[10px] text-slate-400 truncate">admin@gmail.com</p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/login')}
                            className="text-slate-400 hover:text-rose-400 p-1.5 transition"
                            title="Sign Out"
                        >
                            <FaSignOutAlt size={16} />
                        </button>
                    </div>
                </div>

            </aside>

            {/* Main Area Wrapper */}
            <div className="flex-1 flex flex-col min-w-0 bg-slate-900">
                
                {/* Header Bar */}
                <header className="bg-slate-950 border-b border-slate-800 px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
                    
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white"
                        >
                            <FaBars size={18} />
                        </button>

                        <div className="hidden sm:flex items-center relative w-64 lg:w-80">
                            <input
                                type="text"
                                placeholder="Search products, orders, customers..."
                                className="w-full bg-slate-900 text-slate-200 text-xs pl-9 pr-4 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-emerald-500"
                            />
                            <FaSearch className="absolute left-3 top-2.5 text-slate-500 text-xs" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition">
                            <FaBell size={16} />
                            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        </button>

                        <div className="flex items-center gap-2 pl-2 border-l border-slate-800 text-xs font-semibold text-slate-300">
                            <FaUserShield className="text-emerald-400" />
                            <span className="hidden sm:inline">System Status: <span className="text-emerald-400">Online</span></span>
                        </div>
                    </div>

                </header>

                {/* Tab Component Render Area */}
                <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
                    {renderContent()}
                </main>

            </div>

        </div>
    );
}

export default SideBar;

