import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Assests/logo.png";

// Import your content components
import DashboardContent from "./dashboardContent";
import AddProduct from "./addProduct";
import ShowUser from "./userAccess";
import Orders from "./order";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showContent, setShowContent] = useState("DashboardContent"); // default

    // Map string → component
    const contentMap = {
        DashboardContent: <DashboardContent />,
        addProduct: <AddProduct />,
        showUser: <ShowUser />,
        orders: <Orders />,
    };

    return (
        <div className="flex min-h-screen">
            {/* Hamburger button - Always visible on mobile */}
            <button
                className="md:hidden p-3 bg-white text-black shadow-md fixed top-3 left-3 z-50 rounded-md"
                onClick={() => setIsOpen(true)}
            >
                <FaBars size={22} />
            </button>

            {/* Overlay when sidebar is open (mobile only) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:translate-x-0 md:static md:top-0`}
            >
                {/* Logo + Close button */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
                    <img src={logo} alt="logo" className="h-[20vh] w-auto" />

                    {/* Close button - only mobile */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes size={22} />
                    </button>
                </div>

                {/* Sidebar menu */}
                <ul className="p-4 space-y-4">

                    <li
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={() => setShowContent("DashboardContent")}
                    >
                        Dashboard
                    </li>
                    <li
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={() => setShowContent("addProduct")}
                    >
                        Add Product
                    </li>
                    <li
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={() => setShowContent("showUser")}
                    >
                        User List
                    </li>
                    <li
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={() => setShowContent("orders")}
                    >
                        Orders
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-0 md:ml-64 p-6 ml-20">
                {contentMap[showContent] || <DashboardContent />}
            </div>
        </div>
    );
}

export default SideBar;
