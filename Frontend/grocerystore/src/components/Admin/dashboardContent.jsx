import React from 'react';
import { 
  FaDollarSign, 
  FaShoppingBasket, 
  FaBoxOpen, 
  FaUsers, 
  FaArrowUp, 
  FaArrowDown, 
  FaEllipsisV,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle
} from "react-icons/fa";

const RECENT_ORDERS = [
  { id: 'ORD-9481', customer: 'Sarah Jenkins', items: 5, amount: 48.90, status: 'Completed', time: '10 mins ago' },
  { id: 'ORD-9480', customer: 'David Miller', items: 2, amount: 18.50, status: 'Processing', time: '25 mins ago' },
  { id: 'ORD-9479', customer: 'Amanda Lee', items: 8, amount: 92.40, status: 'Completed', time: '1 hour ago' },
  { id: 'ORD-9478', customer: 'Robert Taylor', items: 1, amount: 12.99, status: 'Pending', time: '2 hours ago' },
  { id: 'ORD-9477', customer: 'Elena Rostova', items: 4, amount: 34.20, status: 'Completed', time: '3 hours ago' },
];

const TOP_PRODUCTS = [
  { name: 'Organic Honeycrisp Apples', category: 'Fruits', price: 4.99, sold: 412, stock: 85, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=100' },
  { name: 'Fresh Farm Whole Milk', category: 'Dairy', price: 2.49, sold: 380, stock: 42, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=100' },
  { name: 'Hass Avocado Pack', category: 'Organic', price: 3.99, sold: 295, stock: 18, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=100' },
];

function DashboardContent() {
    return (
        <div className="space-y-6">
            
            {/* Top Title Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">Dashboard Overview</h2>
                    <p className="text-xs text-slate-400 mt-1">Welcome back, Muhammad! Here is what's happening with FreshMart today.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-semibold">Filter:</span>
                    <select className="bg-slate-950 text-slate-200 border border-slate-800 text-xs rounded-lg px-3 py-2 focus:outline-none">
                        <option>Last 30 Days</option>
                        <option>This Week</option>
                        <option>Today</option>
                    </select>
                </div>
            </div>

            {/* 4 Metric KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                
                {/* Total Sales */}
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Sales</span>
                        <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                            <FaDollarSign size={16} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">$24,850.40</h3>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mt-1">
                            <FaArrowUp />
                            <span>+14.2% from last month</span>
                        </div>
                    </div>
                </div>

                {/* Total Orders */}
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Orders</span>
                        <div className="p-2.5 rounded-xl bg-blue-950 text-blue-400 border border-blue-800/50">
                            <FaShoppingBasket size={16} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">1,240</h3>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mt-1">
                            <FaArrowUp />
                            <span>+8.5% from last month</span>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Products</span>
                        <div className="p-2.5 rounded-xl bg-amber-950 text-amber-400 border border-amber-800/50">
                            <FaBoxOpen size={16} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">184</h3>
                        <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mt-1">
                            <span>12 New added this week</span>
                        </div>
                    </div>
                </div>

                {/* Customers */}
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Customers</span>
                        <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/50">
                            <FaUsers size={16} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">892</h3>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mt-1">
                            <FaArrowUp />
                            <span>+5.1% new signups</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Main Content Grid: Recent Orders + Top Products */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Recent Orders List (Col 7) */}
                <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-extrabold text-base text-white">Recent Orders</h3>
                        <button className="text-xs text-emerald-400 font-semibold hover:underline">View All</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead>
                                <tr className="border-b border-slate-800 text-slate-400 uppercase font-bold tracking-wider">
                                    <th className="pb-3 px-2">Order ID</th>
                                    <th className="pb-3 px-2">Customer</th>
                                    <th className="pb-3 px-2">Items</th>
                                    <th className="pb-3 px-2">Total</th>
                                    <th className="pb-3 px-2">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 text-slate-200">
                                {RECENT_ORDERS.map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-900/60 transition">
                                        <td className="py-3 px-2 font-bold text-white">{order.id}</td>
                                        <td className="py-3 px-2">{order.customer}</td>
                                        <td className="py-3 px-2">{order.items} items</td>
                                        <td className="py-3 px-2 font-bold text-emerald-400">${order.amount.toFixed(2)}</td>
                                        <td className="py-3 px-2">
                                            {order.status === 'Completed' && (
                                                <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                                                    <FaCheckCircle size={8} /> Completed
                                                </span>
                                            )}
                                            {order.status === 'Processing' && (
                                                <span className="inline-flex items-center gap-1 bg-blue-950 text-blue-400 border border-blue-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                                                    <FaClock size={8} /> Processing
                                                </span>
                                            )}
                                            {order.status === 'Pending' && (
                                                <span className="inline-flex items-center gap-1 bg-amber-950 text-amber-400 border border-amber-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                                                    <FaClock size={8} /> Pending
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Selling & Inventory Alert (Col 5) */}
                <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-extrabold text-base text-white">Top Selling Products</h3>
                        <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-400">By Volume</span>
                    </div>

                    <div className="space-y-3">
                        {TOP_PRODUCTS.map((prod, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                                <div className="flex items-center gap-3">
                                    <img src={prod.image} alt={prod.name} className="w-10 h-10 object-cover rounded-lg border border-slate-700" />
                                    <div>
                                        <h4 className="font-bold text-xs text-white">{prod.name}</h4>
                                        <p className="text-[10px] text-slate-400">${prod.price} • {prod.sold} units sold</p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                        prod.stock < 20 ? 'bg-rose-950 text-rose-400 border border-rose-800' : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                    }`}>
                                        {prod.stock} in stock
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stock Alert Warning Banner */}
                    <div className="p-4 bg-amber-950/40 border border-amber-800/60 rounded-xl flex items-center gap-3 text-xs text-amber-300">
                        <FaExclamationTriangle className="text-xl text-amber-400 flex-shrink-0" />
                        <div>
                            <p className="font-bold">Inventory Low Stock Alert</p>
                            <p className="text-[11px] text-amber-200/80">3 items are falling below the safety re-order threshold of 20 units.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default DashboardContent;