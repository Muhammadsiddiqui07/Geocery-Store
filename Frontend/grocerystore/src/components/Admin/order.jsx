import React, { useState } from 'react';
import { FaSearch, FaFilter, FaCheckCircle, FaClock, FaTimesCircle, FaTruck, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const INITIAL_ORDERS = [
  { id: 'ORD-9481', customer: 'Sarah Jenkins', email: 'sarah.j@gmail.com', items: 5, amount: 48.90, payment: 'Credit Card', status: 'Delivered', date: '2026-08-12 14:20' },
  { id: 'ORD-9480', customer: 'David Miller', email: 'david.m@yahoo.com', items: 2, amount: 18.50, payment: 'PayPal', status: 'Processing', date: '2026-08-12 13:45' },
  { id: 'ORD-9479', customer: 'Amanda Lee', email: 'amanda.lee@outlook.com', items: 8, amount: 92.40, payment: 'Google Pay', status: 'Delivered', date: '2026-08-12 11:10' },
  { id: 'ORD-9478', customer: 'Robert Taylor', email: 'rtaylor@gmail.com', items: 1, amount: 12.99, payment: 'Cash on Delivery', status: 'Pending', date: '2026-08-12 10:05' },
  { id: 'ORD-9477', customer: 'Elena Rostova', email: 'elena@icloud.com', items: 4, amount: 34.20, payment: 'Credit Card', status: 'Cancelled', date: '2026-08-11 18:30' }
];

function Order() {
    const [orders, setOrders] = useState(INITIAL_ORDERS);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const handleStatusChange = (id, newStatus) => {
        setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
        Swal.fire({
            icon: 'success',
            title: 'Order Status Updated',
            text: `Order ${id} is now marked as "${newStatus}".`,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
        });
    };

    const filtered = orders.filter(o => {
        const matchesSearch = o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'All' || o.status.toLowerCase() === statusFilter.toLowerCase();
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            
            {/* Top Title Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">Order Management</h2>
                    <p className="text-xs text-slate-400 mt-1">Track customer orders, update delivery status, and inspect transaction details.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs bg-slate-950 border border-slate-800 text-emerald-400 font-bold px-3 py-1.5 rounded-full">
                        Total Orders: {orders.length}
                    </span>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-80">
                    <input
                        type="text"
                        placeholder="Search order ID or customer name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-slate-900 text-slate-200 text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                    />
                    <FaSearch className="absolute left-3 top-3 text-slate-500 text-xs" />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                        <FaFilter className="text-emerald-400" /> Status:
                    </span>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-slate-900 text-slate-200 border border-slate-800 text-xs rounded-xl px-3 py-2 focus:outline-none flex-1 sm:flex-none"
                    >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead>
                            <tr className="bg-slate-900/80 text-slate-400 uppercase font-bold tracking-wider border-b border-slate-800">
                                <th className="py-3.5 px-4">Order ID</th>
                                <th className="py-3.5 px-4">Customer Details</th>
                                <th className="py-3.5 px-4">Date & Time</th>
                                <th className="py-3.5 px-4">Items</th>
                                <th className="py-3.5 px-4">Total Amount</th>
                                <th className="py-3.5 px-4">Payment</th>
                                <th className="py-3.5 px-4">Status</th>
                                <th className="py-3.5 px-4 text-right">Update Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-200">
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="text-center py-10 text-slate-500">
                                        No customer orders found matching your search.
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((ord) => (
                                    <tr key={ord.id} className="hover:bg-slate-900/50 transition">
                                        <td className="py-3.5 px-4 font-mono font-bold text-white">{ord.id}</td>
                                        <td className="py-3.5 px-4">
                                            <div className="font-bold text-slate-100">{ord.customer}</div>
                                            <div className="text-[10px] text-slate-400">{ord.email}</div>
                                        </td>
                                        <td className="py-3.5 px-4 text-slate-400 text-[11px]">{ord.date}</td>
                                        <td className="py-3.5 px-4 font-semibold">{ord.items} items</td>
                                        <td className="py-3.5 px-4 font-extrabold text-emerald-400">${ord.amount.toFixed(2)}</td>
                                        <td className="py-3.5 px-4 text-slate-300">{ord.payment}</td>
                                        <td className="py-3.5 px-4">
                                            {ord.status === 'Delivered' && (
                                                <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                    <FaCheckCircle size={10} /> Delivered
                                                </span>
                                            )}
                                            {ord.status === 'Processing' && (
                                                <span className="inline-flex items-center gap-1 bg-blue-950 text-blue-400 border border-blue-800 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                    <FaTruck size={10} /> In Transit
                                                </span>
                                            )}
                                            {ord.status === 'Pending' && (
                                                <span className="inline-flex items-center gap-1 bg-amber-950 text-amber-400 border border-amber-800 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                    <FaClock size={10} /> Pending
                                                </span>
                                            )}
                                            {ord.status === 'Cancelled' && (
                                                <span className="inline-flex items-center gap-1 bg-rose-950 text-rose-400 border border-rose-800 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                    <FaTimesCircle size={10} /> Cancelled
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-right">
                                            <select
                                                value={ord.status}
                                                onChange={(e) => handleStatusChange(ord.id, e.target.value)}
                                                className="bg-slate-900 text-slate-200 border border-slate-700 text-[11px] font-semibold rounded-lg px-2 py-1 focus:outline-none cursor-pointer"
                                            >
                                                <option value="Pending">Set Pending</option>
                                                <option value="Processing">Set Processing</option>
                                                <option value="Delivered">Set Delivered</option>
                                                <option value="Cancelled">Set Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Order;