import React, { useState } from 'react';
import Navbar from "../components/navbar";
import frontBasket from '../Assests/front.png';
import { 
  FaRocket, 
  FaLeaf, 
  FaShieldAlt, 
  FaHeadset, 
  FaStar, 
  FaPlus, 
  FaArrowRight, 
  FaCheckCircle, 
  FaTag, 
  FaAppleAlt, 
  FaCarrot, 
  FaBreadSlice, 
  FaWineBottle, 
  FaCheese, 
  FaDrumstickBite,
  FaHeart,
  FaShoppingBag
} from "react-icons/fa";

// Sample Products Data
const FEATURED_PRODUCTS = [
  {
    id: 101,
    name: 'Organic Honeycrisp Apples',
    category: 'Fruits',
    unit: '1 kg / ~4-5 pcs',
    price: 4.99,
    originalPrice: 6.49,
    rating: 4.9,
    reviews: 128,
    badge: '15% OFF',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 102,
    name: 'Fresh Farm Whole Milk',
    category: 'Dairy',
    unit: '1 Liter Bottle',
    price: 2.49,
    originalPrice: 2.99,
    rating: 4.8,
    reviews: 95,
    badge: 'Fresh',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 103,
    name: 'Hass Hass Avocado Pack',
    category: 'Organic',
    unit: '3 Pcs Pack',
    price: 3.99,
    originalPrice: 5.20,
    rating: 5.0,
    reviews: 210,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 104,
    name: 'Artisanal Whole Wheat Bread',
    category: 'Bakery',
    unit: '400g Loaf',
    price: 3.29,
    originalPrice: 3.99,
    rating: 4.7,
    reviews: 84,
    badge: 'Organic',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 105,
    name: 'Cold Pressed Orange Juice',
    category: 'Beverages',
    unit: '750ml Bottle',
    price: 4.49,
    originalPrice: 5.49,
    rating: 4.9,
    reviews: 142,
    badge: 'No Sugar Added',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 106,
    name: 'Fresh Organic Strawberries',
    category: 'Fruits',
    unit: '250g Clamshell',
    price: 3.89,
    originalPrice: 4.99,
    rating: 4.8,
    reviews: 176,
    badge: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 107,
    name: 'Organic Broccoli Florets',
    category: 'Vegetables',
    unit: '500g Bag',
    price: 2.79,
    originalPrice: 3.29,
    rating: 4.6,
    reviews: 62,
    badge: 'Farm Direct',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 108,
    name: 'Free Range Grade A Eggs',
    category: 'Dairy',
    unit: '12 Large Eggs',
    price: 4.19,
    originalPrice: 4.89,
    rating: 4.9,
    reviews: 310,
    badge: '100% Pure',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400'
  }
];

const CATEGORIES = [
  { name: 'Fruits & Veggies', count: '140+ items', icon: <FaAppleAlt className="text-emerald-500 text-2xl" />, color: 'bg-emerald-50' },
  { name: 'Dairy & Eggs', count: '85+ items', icon: <FaCheese className="text-amber-500 text-2xl" />, color: 'bg-amber-50' },
  { name: 'Fresh Bakery', count: '60+ items', icon: <FaBreadSlice className="text-orange-500 text-2xl" />, color: 'bg-orange-50' },
  { name: 'Cold Beverages', count: '110+ items', icon: <FaWineBottle className="text-blue-500 text-2xl" />, color: 'bg-blue-50' },
  { name: 'Meat & Seafood', count: '45+ items', icon: <FaDrumstickBite className="text-rose-500 text-2xl" />, color: 'bg-rose-50' },
  { name: 'Organic Specials', count: '90+ items', icon: <FaLeaf className="text-teal-500 text-2xl" />, color: 'bg-teal-50' }
];

export default function MainPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [addedItems, setAddedItems] = useState({});

  const filteredProducts = selectedFilter === 'All'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === selectedFilter);

  const handleAddToCart = (id) => {
    setAddedItems(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Ambient Glow background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
                <FaLeaf className="text-emerald-400 animate-pulse" />
                <span>100% Certified Farm-Fresh & Organic</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Fresh Groceries <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Delivered to Your Door
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Skip the lines! Handpicked organic fruits, crisp vegetables, fresh dairy, and daily household essentials delivered in <strong>30 minutes</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
                >
                  <FaShoppingBag />
                  <span>Shop Fresh Today</span>
                </a>
                
                <a
                  href="#categories"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-full border border-white/20 backdrop-blur-sm transition-all"
                >
                  <span>Explore Categories</span>
                  <FaArrowRight className="text-xs" />
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-emerald-800/80 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <h4 className="text-2xl font-extrabold text-white">15k+</h4>
                  <p className="text-xs text-emerald-300">Happy Customers</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-white">30 Min</h4>
                  <p className="text-xs text-emerald-300">Express Delivery</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-white">100%</h4>
                  <p className="text-xs text-emerald-300">Organic Guarantee</p>
                </div>
              </div>

            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-md">
                {/* Glowing Aura behind image */}
                <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
                
                <img
                  src={frontBasket}
                  alt="Fresh Grocery Basket"
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105"
                />

                {/* Floating Highlight Card */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-3 text-slate-900 hidden sm:flex">
                  <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl text-xl">
                    <FaRocket />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs">Super Fast Delivery</h5>
                    <p className="text-[11px] text-slate-500">Live order tracking included</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Category Explorer Section */}
      <section id="categories" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Fresh Selection</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Explore Popular Categories</h2>
          </div>
          <a href="#products" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
            <span>View All Categories</span>
            <FaArrowRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`${cat.color} p-5 rounded-2xl border border-slate-200/60 text-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center`}
            >
              <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform mb-3">
                {cat.icon}
              </div>
              <h3 className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition-colors">{cat.name}</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Weekly Top Picks</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Featured Fresh Products</h2>
            <p className="text-slate-500 text-sm mt-2">Sourced directly from local organic farms every single morning.</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {['All', 'Organic', 'Fruits', 'Dairy', 'Bakery', 'Beverages'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedFilter === filter
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all group relative"
              >
                {/* Product Badge */}
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-emerald-100 text-emerald-800 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full">
                    {product.badge}
                  </span>
                  <button className="text-slate-400 hover:text-rose-500 transition">
                    <FaHeart size={14} />
                  </button>
                </div>

                {/* Product Image */}
                <div className="overflow-hidden rounded-xl bg-white p-2 mb-4 h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-1">
                    <FaStar />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">({product.reviews})</span>
                  </div>

                  <h3 className="font-bold text-slate-800 text-sm group-hover:text-emerald-700 transition line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-slate-400 text-xs mt-0.5">{product.unit}</p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200">
                    <div>
                      <span className="text-lg font-extrabold text-emerald-700">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-400 line-through ml-1.5">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`p-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-1.5 ${
                        addedItems[product.id]
                          ? 'bg-emerald-800 text-white'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200'
                      }`}
                    >
                      {addedItems[product.id] ? (
                        <>
                          <FaCheckCircle className="text-xs" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <FaPlus className="text-xs" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Promotional Deal of the Day Banner */}
      <section id="offers" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-4">
              <span className="bg-amber-400 text-slate-950 font-extrabold text-xs uppercase px-3 py-1 rounded-full inline-block">
                🔥 Deal of the Week
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Organic Citrus & Tropical Fruit Basket
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base max-w-lg">
                Get 35% OFF on our curated selection of immunity-boosting vitamins. Includes fresh oranges, avocados, pomegranates & kiwi.
              </p>
              
              <div className="flex items-center gap-4 pt-2">
                <div className="bg-emerald-950/60 backdrop-blur border border-white/10 px-4 py-2 rounded-xl text-center">
                  <span className="block font-extrabold text-xl text-amber-300">12</span>
                  <span className="text-[10px] uppercase text-emerald-200 font-medium">Hours</span>
                </div>
                <div className="bg-emerald-950/60 backdrop-blur border border-white/10 px-4 py-2 rounded-xl text-center">
                  <span className="block font-extrabold text-xl text-amber-300">45</span>
                  <span className="text-[10px] uppercase text-emerald-200 font-medium">Mins</span>
                </div>
                <div className="bg-emerald-950/60 backdrop-blur border border-white/10 px-4 py-2 rounded-xl text-center">
                  <span className="block font-extrabold text-xl text-amber-300">30</span>
                  <span className="text-[10px] uppercase text-emerald-200 font-medium">Secs</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-lg transition-all"
                >
                  <FaTag />
                  <span>Claim 35% Discount</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600"
                alt="Tropical Fruit Basket"
                className="rounded-2xl shadow-2xl object-cover max-h-80 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Feature Cards */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl text-2xl">
                <FaRocket />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Express Delivery</h4>
                <p className="text-xs text-slate-500 mt-1">Delivered directly to your door in 30 minutes or less.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl text-2xl">
                <FaLeaf />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">100% Organic</h4>
                <p className="text-xs text-slate-500 mt-1">Sourced only from certified pesticide-free local farms.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl text-2xl">
                <FaShieldAlt />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Secure Payments</h4>
                <p className="text-xs text-slate-500 mt-1">100% protected SSL payment processing system.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl text-2xl">
                <FaHeadset />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">24/7 Dedicated Support</h4>
                <p className="text-xs text-slate-500 mt-1">Our customer experience experts are here anytime.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modern E-Commerce Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Fresh<span className="text-emerald-500">Mart</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Your trusted neighborhood partner for fresh fruits, crisp vegetables, organic dairy, and daily grocery items delivered right to your home.
              </p>
              <div className="pt-2">
                <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Subscribe to weekly deals</h5>
                <div className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500 flex-1"
                  />
                  <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition">About FreshMart</a></li>
                <li><a href="#products" className="hover:text-emerald-400 transition">Featured Products</a></li>
                <li><a href="#categories" className="hover:text-emerald-400 transition">Organic Categories</a></li>
                <li><a href="#offers" className="hover:text-emerald-400 transition">Hot Weekly Offers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Store Locations</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Customer Care</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition">Help & Support Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Track Your Order</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Return & Refund Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>📍 104 Fresh Avenue, Green City</p>
                <p>📞 +1 (800) 456-7890</p>
                <p>✉️ support@freshmart.com</p>
                <div className="pt-2 text-xs text-emerald-400 font-semibold">
                  Open 7 Days: 8:00 AM - 10:00 PM
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} FreshMart Grocery Store. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Cookie Preferences</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}