import React, { useState } from 'react';
import ProductForm from './addProductForm';
import { FaSearch, FaFilter, FaEdit, FaTrashAlt, FaPlus, FaStar, FaBox } from 'react-icons/fa';
import Swal from 'sweetalert2';

const INITIAL_PRODUCTS = [
  { id: 'PRD-001', name: 'Organic Honeycrisp Apples', category: 'Grocery', price: 4.99, rating: 5, stock: 85, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-002', name: 'Fresh Farm Whole Milk', category: 'Grocery', price: 2.49, rating: 4, stock: 42, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-003', name: 'Hass Avocado Pack', category: 'Grocery', price: 3.99, rating: 5, stock: 18, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-004', name: 'Artisanal Whole Wheat Bread', category: 'Bakery', price: 3.29, rating: 4, stock: 30, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-005', name: 'Cold Pressed Orange Juice', category: 'Grocery', price: 4.49, rating: 5, stock: 65, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=100' }
];

function AddProduct() {
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to remove product ${id}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, delete'
        }).then((result) => {
            if (result.isConfirmed) {
                setProducts(prev => prev.filter(p => p.id !== id));
                Swal.fire('Deleted!', 'Product has been removed.', 'success');
            }
        });
    };

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || p.category.toLowerCase() === categoryFilter.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-6">
            
            {/* Header + Add Product Modal Trigger */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">Product Catalog</h2>
                    <p className="text-xs text-slate-400 mt-1">Manage inventory, prices, ratings, and add new stock items.</p>
                </div>
                <ProductForm />
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-80">
                    <input
                        type="text"
                        placeholder="Search product by name or ID..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-slate-900 text-slate-200 text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                    />
                    <FaSearch className="absolute left-3 top-3 text-slate-500 text-xs" />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                        <FaFilter className="text-emerald-400" /> Category:
                    </span>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="bg-slate-900 text-slate-200 border border-slate-800 text-xs rounded-xl px-3 py-2 focus:outline-none flex-1 sm:flex-none"
                    >
                        <option value="All">All Categories</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead>
                            <tr className="bg-slate-900/80 text-slate-400 uppercase font-bold tracking-wider border-b border-slate-800">
                                <th className="py-3.5 px-4">Item</th>
                                <th className="py-3.5 px-4">ID</th>
                                <th className="py-3.5 px-4">Category</th>
                                <th className="py-3.5 px-4">Price</th>
                                <th className="py-3.5 px-4">Rating</th>
                                <th className="py-3.5 px-4">Stock Level</th>
                                <th className="py-3.5 px-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-200">
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="text-center py-10 text-slate-500">
                                        No products found matching your search.
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((prod) => (
                                    <tr key={prod.id} className="hover:bg-slate-900/50 transition">
                                        <td className="py-3 px-4 flex items-center gap-3">
                                            <img src={prod.image} alt={prod.name} className="w-10 h-10 object-cover rounded-lg border border-slate-800" />
                                            <span className="font-bold text-white text-xs">{prod.name}</span>
                                        </td>
                                        <td className="py-3 px-4 font-mono text-slate-400">{prod.id}</td>
                                        <td className="py-3 px-4">
                                            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full text-[10px] text-slate-300 font-semibold">
                                                {prod.category}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 font-extrabold text-emerald-400">${prod.price.toFixed(2)}</td>
                                        <td className="py-3 px-4 text-amber-400 font-bold flex items-center gap-1">
                                            <FaStar size={10} />
                                            <span>{prod.rating}.0</span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                                prod.stock < 20
                                                    ? 'bg-rose-950 text-rose-400 border border-rose-800'
                                                    : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                            }`}>
                                                {prod.stock} units
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition" title="Edit">
                                                    <FaEdit size={12} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(prod.id)}
                                                    className="p-2 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-400 border border-rose-800 transition"
                                                    title="Delete"
                                                >
                                                    <FaTrashAlt size={12} />
                                                </button>
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

export default AddProduct;

