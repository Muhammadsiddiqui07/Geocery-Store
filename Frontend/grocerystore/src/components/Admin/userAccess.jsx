import React, { useState } from 'react';
import { FaSearch, FaUserShield, FaUserCheck, FaTrash, FaUserLock, FaEnvelope } from 'react-icons/fa';
import Swal from 'sweetalert2';

const INITIAL_USERS = [
  { id: 'USR-001', name: 'Muhammad Siddiqui', email: 'admin@gmail.com', role: 'Admin', status: 'Active', joinDate: '2026-01-10' },
  { id: 'USR-002', name: 'Sarah Jenkins', email: 'sarah.j@gmail.com', role: 'Customer', status: 'Active', joinDate: '2026-02-14' },
  { id: 'USR-003', name: 'David Miller', email: 'david.m@yahoo.com', role: 'Customer', status: 'Active', joinDate: '2026-03-01' },
  { id: 'USR-004', name: 'Amanda Lee', email: 'amanda.lee@outlook.com', role: 'Customer', status: 'Active', joinDate: '2026-04-12' },
  { id: 'USR-005', name: 'Robert Taylor', email: 'rtaylor@gmail.com', role: 'Customer', status: 'Disabled', joinDate: '2026-05-20' }
];

function UserAccess() {
    const [users, setUsers] = useState(INITIAL_USERS);
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState('All');

    const handleToggleStatus = (id) => {
        setUsers(prev => prev.map(u => {
            if (u.id === id) {
                const newStatus = u.status === 'Active' ? 'Disabled' : 'Active';
                Swal.fire({
                    icon: 'info',
                    title: `User Account ${newStatus}`,
                    text: `Account for ${u.name} is now ${newStatus.toLowerCase()}.`,
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000
                });
                return { ...u, status: newStatus };
            }
            return u;
        }));
    };

    const handleDeleteUser = (id, name) => {
        Swal.fire({
            title: 'Delete User Account?',
            text: `Are you sure you want to remove user "${name}"? This action cannot be undone.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, Delete User'
        }).then((result) => {
            if (result.isConfirmed) {
                setUsers(prev => prev.filter(u => u.id !== id));
                Swal.fire('Deleted!', 'User account has been removed.', 'success');
            }
        });
    };

    const filtered = users.filter(u => {
        const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
        const matchesRole = roleFilter === 'All' || u.role.toLowerCase() === roleFilter.toLowerCase();
        return matchesSearch && matchesRole;
    });

    return (
        <div className="space-y-6">
            
            {/* Top Title Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">User Access & Roles</h2>
                    <p className="text-xs text-slate-400 mt-1">Manage registered customer profiles, assign administrative roles, and enforce security policies.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs bg-slate-950 border border-slate-800 text-emerald-400 font-bold px-3 py-1.5 rounded-full">
                        Registered Accounts: {users.length}
                    </span>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-80">
                    <input
                        type="text"
                        placeholder="Search user by name or email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-slate-900 text-slate-200 text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                    />
                    <FaSearch className="absolute left-3 top-3 text-slate-500 text-xs" />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="text-xs text-slate-400 font-semibold">Filter Role:</span>
                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="bg-slate-900 text-slate-200 border border-slate-800 text-xs rounded-xl px-3 py-2 focus:outline-none flex-1 sm:flex-none"
                    >
                        <option value="All">All Roles</option>
                        <option value="Admin">Admin</option>
                        <option value="Customer">Customer</option>
                    </select>
                </div>
            </div>

            {/* User List Table */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead>
                            <tr className="bg-slate-900/80 text-slate-400 uppercase font-bold tracking-wider border-b border-slate-800">
                                <th className="py-3.5 px-4">User Profile</th>
                                <th className="py-3.5 px-4">User ID</th>
                                <th className="py-3.5 px-4">Role</th>
                                <th className="py-3.5 px-4">Joined Date</th>
                                <th className="py-3.5 px-4">Account Status</th>
                                <th className="py-3.5 px-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-200">
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-10 text-slate-500">
                                        No registered accounts found matching your query.
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((usr) => (
                                    <tr key={usr.id} className="hover:bg-slate-900/50 transition">
                                        <td className="py-3.5 px-4 flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-white text-xs">
                                                {usr.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{usr.name}</div>
                                                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                                                    <FaEnvelope size={8} /> {usr.email}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-4 font-mono text-slate-400">{usr.id}</td>
                                        <td className="py-3.5 px-4">
                                            {usr.role === 'Admin' ? (
                                                <span className="inline-flex items-center gap-1 bg-purple-950 text-purple-300 border border-purple-800 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                                                    <FaUserShield size={10} /> Admin
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 bg-slate-900 text-slate-300 border border-slate-700 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                                                    Customer
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-slate-400">{usr.joinDate}</td>
                                        <td className="py-3.5 px-4">
                                            {usr.status === 'Active' ? (
                                                <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="bg-rose-950 text-rose-400 border border-rose-800 px-2 py-0.5 rounded text-[10px] font-bold">
                                                    Disabled
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button
                                                    onClick={() => handleToggleStatus(usr.id)}
                                                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition"
                                                    title={usr.status === 'Active' ? 'Disable Account' : 'Enable Account'}
                                                >
                                                    <FaUserLock size={12} />
                                                </button>
                                                {usr.role !== 'Admin' && (
                                                    <button
                                                        onClick={() => handleDeleteUser(usr.id, usr.name)}
                                                        className="p-2 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-400 border border-rose-800 transition"
                                                        title="Delete User"
                                                    >
                                                        <FaTrash size={12} />
                                                    </button>
                                                )}
                                            </div>
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

export default UserAccess;