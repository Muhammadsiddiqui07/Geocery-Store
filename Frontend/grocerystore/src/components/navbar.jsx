import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../Assests/logo.png';
import { 
  FaShoppingBag, 
  FaSearch, 
  FaUser, 
  FaTrash, 
  FaPlus, 
  FaMinus, 
  FaArrowRight, 
  FaShieldAlt, 
  FaBars, 
  FaTimes,
  FaStore,
  FaFire,
  FaCheck
} from "react-icons/fa";

// Sample cart items for interactive demo state
const INITIAL_CART = [
  { id: 1, name: 'Fresh Organic Apples (1kg)', price: 4.99, qty: 2, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=200' },
  { id: 2, name: 'Whole Dairy Milk (1L)', price: 2.49, qty: 1, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=200' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const [searchQuery, setSearchQuery] = useState('');

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 0 ? (subtotal >= 20 ? 0 : 2.99) : 0;
  const total = subtotal + shipping;

  return (
    <>
      {/* Top Banner & Header Navigation Wrapper */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-[11px] font-semibold py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-extrabold text-[9px] uppercase px-1.5 py-0.5 rounded">NEW</span>
              <span className="hidden sm:inline">🚀 Superfast 30-min express delivery available! Free shipping over $20.</span>
              <span className="sm:hidden">🚀 Free Delivery on orders over $20</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1.5 text-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open Today: 8:00 AM - 10:00 PM</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4 sm:gap-6">
            
            {/* Logo & Brand Name */}
            <div className="flex items-center gap-6">
              <NavLink to="/" className="flex items-center gap-3 group">
                <img
                  src={logo}
                  alt="Grocery Store Logo"
                  className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <div className="hidden xl:block">
                  <span className="font-extrabold text-2xl text-slate-900 tracking-tight leading-none block">
                    Fresh<span className="text-emerald-600">Mart</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase block mt-0.5">Organic Grocery</span>
                </div>
              </NavLink>
            </div>

            {/* Desktop Search Input */}
            <div className="hidden lg:flex items-center relative flex-1 max-w-md mx-4">
              <input
                type="text"
                placeholder="Search fresh vegetables, fruits, bakery, dairy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-800 text-xs pl-10 pr-4 py-2.5 rounded-full border border-slate-200/80 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all shadow-inner"
              />
              <FaSearch className="absolute left-3.5 top-3 text-slate-400 text-xs" />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-emerald-600 font-extrabold pb-1 border-b-2 border-emerald-600" : "hover:text-emerald-600 transition"
                }
              >
                Home
              </NavLink>
              <a href="#categories" className="hover:text-emerald-600 transition">
                Categories
              </a>
              <a href="#products" className="hover:text-emerald-600 transition">
                Products
              </a>
              <a href="#offers" className="hover:text-emerald-600 transition flex items-center gap-1 text-rose-600 font-extrabold">
                <FaFire size={12} />
                <span>Deals</span>
              </a>
            </nav>

            {/* Right Action Icons & CTAs */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              
              {/* Interactive Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition flex items-center justify-center border border-emerald-200/60 shadow-xs group"
                aria-label="Shopping Cart Drawer"
                title="View Shopping Cart"
              >
                <FaShoppingBag className="text-base group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Admin Portal Quick Link */}
              <NavLink
                to="/AdminDashborad"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-full border border-slate-200/80 transition"
                title="Admin Control Panel"
              >
                <FaStore className="text-emerald-600 text-sm" />
                <span>Admin</span>
              </NavLink>

              {/* Login Action */}
              <NavLink
                to="/login"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-emerald-600 px-3 py-2 transition"
              >
                Sign In
              </NavLink>

              {/* Register CTA Button */}
              <NavLink
                to="/signup"
                className="inline-flex items-center justify-center text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full shadow-md shadow-emerald-200 transition-all hover:scale-105"
              >
                Register
              </NavLink>

              {/* Mobile Menu Icon */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              >
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search fresh groceries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 text-xs pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
              />
              <FaSearch className="absolute left-3 top-3 text-slate-400 text-xs" />
            </div>
            
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-emerald-600">
              Home
            </NavLink>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-emerald-600">
              Categories
            </a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-emerald-600">
              Products
            </a>
            <a href="#offers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1">
              <FaFire /> Deals & Offers
            </a>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <NavLink to="/AdminDashborad" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <FaStore className="text-emerald-600" /> Admin Portal
              </NavLink>
              <NavLink to="/login" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold text-emerald-700">
                Sign In
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Slide-over Cart Drawer Modal */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs transition-opacity">
          <div className="absolute inset-0" onClick={() => setCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              
              {/* Cart Drawer Header */}
              <div className="p-5 bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-2">
                  <FaShoppingBag className="text-emerald-300 text-xl" />
                  <h2 className="text-base font-extrabold tracking-tight">Your Cart ({cartCount} items)</h2>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Free Express Shipping Meter */}
              <div className="bg-emerald-50 px-5 py-3 border-b border-emerald-100 text-xs text-emerald-900">
                {subtotal >= 20 ? (
                  <p className="font-extrabold text-emerald-700 flex items-center gap-1.5">
                    <FaCheck className="text-emerald-600" />
                    <span>You unlocked FREE Express Delivery!</span>
                  </p>
                ) : (
                  <div>
                    <p className="mb-1 text-slate-700">Add <span className="font-extrabold text-emerald-700">${(20 - subtotal).toFixed(2)}</span> more for FREE delivery</p>
                    <div className="w-full bg-emerald-200/80 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-full transition-all duration-300 rounded-full" 
                        style={{ width: `${Math.min((subtotal / 20) * 100, 100)}%` }} 
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Items Scroll Area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <FaShoppingBag className="mx-auto text-4xl text-slate-300" />
                    <p className="text-slate-500 font-bold text-sm">Your shopping cart is empty</p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="mt-2 text-xs font-extrabold text-emerald-600 hover:text-emerald-700 uppercase tracking-wider"
                    >
                      Explore Fresh Products &rarr;
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3.5 p-3 bg-slate-50 rounded-2xl border border-slate-200/60 items-center hover:shadow-xs transition">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-slate-200 bg-white" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-800 truncate">{item.name}</h4>
                        <p className="text-emerald-700 font-extrabold text-sm mt-0.5">${item.price.toFixed(2)}</p>
                        
                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-md bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-xs"
                          >
                            <FaMinus size={8} />
                          </button>
                          <span className="text-xs font-extrabold w-4 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-md bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-xs"
                          >
                            <FaPlus size={8} />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-rose-500 p-1.5 transition"
                        title="Remove item"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer & Checkout Summary */}
              {cartItems.length > 0 && (
                <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3.5">
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-slate-800">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Shipping</span>
                      <span className="font-bold text-slate-800">
                        {shipping === 0 ? <span className="text-emerald-600 uppercase font-extrabold">FREE</span> : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                      <span>Total Price</span>
                      <span className="text-emerald-700">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 hover:gap-3"
                  >
                    <span>Proceed to Checkout</span>
                    <FaArrowRight size={14} />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-semibold">
                    <FaShieldAlt className="text-emerald-600" />
                    <span>100% Secure & Encrypted Checkout</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
