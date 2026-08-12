import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { 
  FaStar, 
  FaPlus, 
  FaCheckCircle, 
  FaFilter, 
  FaSearch, 
  FaHeart,
  FaShoppingBag,
  FaTimes,
  FaShieldAlt,
  FaTruck
} from 'react-icons/fa';

const SHOP_PRODUCTS = [
  { id: 201, name: 'Organic Honeycrisp Apples', category: 'Fruits', price: 4.99, originalPrice: 6.49, rating: 4.9, reviews: 128, unit: '1 kg Pack', badge: '15% OFF', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 202, name: 'Fresh Farm Whole Milk', category: 'Dairy', price: 2.49, originalPrice: 2.99, rating: 4.8, reviews: 95, unit: '1 Liter Bottle', badge: 'Fresh', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 203, name: 'Hass Avocado Pack', category: 'Organic', price: 3.99, originalPrice: 5.20, rating: 5.0, reviews: 210, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 204, name: 'Artisanal Whole Wheat Bread', category: 'Bakery', price: 3.29, originalPrice: 3.99, rating: 4.7, reviews: 84, unit: '400g Loaf', badge: 'Organic', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 205, name: 'Cold Pressed Orange Juice', category: 'Beverages', price: 4.49, originalPrice: 5.49, rating: 4.9, reviews: 142, unit: '750ml Bottle', badge: 'No Sugar', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 206, name: 'Fresh Organic Strawberries', category: 'Fruits', price: 3.89, originalPrice: 4.99, rating: 4.8, reviews: 176, unit: '250g Box', badge: 'Seasonal', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 207, name: 'Organic Broccoli Florets', category: 'Vegetables', price: 2.79, originalPrice: 3.29, rating: 4.6, reviews: 62, unit: '500g Bag', badge: 'Farm Direct', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 208, name: 'Free Range Grade A Eggs', category: 'Dairy', price: 4.19, originalPrice: 4.89, rating: 4.9, reviews: 310, unit: '12 Large Eggs', badge: '100% Pure', image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 209, name: 'Wild Caught Salmon Fillet', category: 'Seafood', price: 12.99, originalPrice: 15.99, rating: 4.9, reviews: 88, unit: '350g Portion', badge: 'Wild Catch', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 210, name: 'Roasted Almond Mix', category: 'Snacks', price: 6.49, originalPrice: 7.99, rating: 4.7, reviews: 115, unit: '200g Pouch', badge: 'Superfood', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 211, name: 'Extra Virgin Olive Oil', category: 'Pantry', price: 9.99, originalPrice: 12.49, rating: 5.0, reviews: 240, unit: '500ml Bottle', badge: 'First Press', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400', inStock: true },
  { id: 212, name: 'Gourmet Vanilla Bean Gelato', category: 'Frozen', price: 5.99, originalPrice: 7.29, rating: 4.9, reviews: 195, unit: '473ml Tub', badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=400', inStock: true }
];

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [addedItems, setAddedItems] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const categories = ['All', 'Fruits', 'Dairy', 'Organic', 'Bakery', 'Beverages', 'Vegetables', 'Seafood', 'Snacks', 'Pantry', 'Frozen'];

  const handleAddToCart = (id) => {
    setAddedItems(prev => ({ ...prev, [id]: true }));
    setTimeout(() => setAddedItems(prev => ({ ...prev, [id]: false })), 1500);
  };

  // Filter & Sort Logic
  const filteredProducts = SHOP_PRODUCTS
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Full Store Inventory
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
              Fresh Organic <span className="text-emerald-400">Grocery Shop</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Browse over 500+ fresh products directly delivered to your doorstep.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              placeholder="Search products by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white text-slate-800 text-xs pl-9 pr-4 py-2.5 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <FaSearch className="absolute left-3.5 top-3 text-slate-400 text-xs" />
          </div>
        </div>
      </section>

      {/* Main Shop Container */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <FaFilter className="text-emerald-600" /> Filter Categories
                </h3>
                <span className="text-[10px] bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded">
                  {filteredProducts.length} items
                </span>
              </div>

              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <FaCheckCircle size={10} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Guarantee Box */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-5 text-emerald-900 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs">
                <FaShieldAlt className="text-base" /> 100% Quality Assurance
              </div>
              <p className="text-[11px] text-emerald-800/80 leading-relaxed">
                If you receive any damaged or non-fresh item, we provide instant 100% money-back refund within 2 hours.
              </p>
            </div>
          </aside>

          {/* Right Product Grid Area */}
          <main className="flex-1 space-y-6">
            
            {/* Controls Bar */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="text-xs text-slate-600">
                Showing <span className="font-extrabold text-slate-900">{filteredProducts.length}</span> of {SHOP_PRODUCTS.length} products
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-semibold">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-100 text-slate-800 border border-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none font-semibold cursor-pointer"
                >
                  <option value="featured">Featured Picks</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all group relative"
                >
                  {/* Top Badges */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-emerald-100 text-emerald-800 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                    <button className="text-slate-300 hover:text-rose-500 transition">
                      <FaHeart size={14} />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div 
                    onClick={() => setQuickViewProduct(product)}
                    className="overflow-hidden rounded-xl bg-slate-50 p-2 mb-4 h-48 flex items-center justify-center cursor-pointer relative"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-2 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                      Quick View
                    </span>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-1">
                      <FaStar />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 font-normal">({product.reviews})</span>
                    </div>

                    <h3 className="font-bold text-slate-800 text-sm group-hover:text-emerald-700 transition line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-[11px] mt-0.5">{product.unit || 'Per Item'}</p>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                      <div>
                        <span className="text-lg font-extrabold text-emerald-700">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-400 line-through ml-1.5">${product.originalPrice.toFixed(2)}</span>
                        )}
                      </div>

                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className={`p-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1.5 ${
                          addedItems[product.id]
                            ? 'bg-emerald-800 text-white'
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200'
                        }`}
                      >
                        {addedItems[product.id] ? (
                          <>
                            <FaCheckCircle size={12} />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <FaPlus size={10} />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </main>

        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl space-y-4">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 transition"
            >
              <FaTimes size={18} />
            </button>

            <div className="flex gap-4">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-36 h-36 object-cover rounded-2xl border" />
              <div className="space-y-2">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                  {quickViewProduct.badge}
                </span>
                <h3 className="font-extrabold text-lg text-slate-900">{quickViewProduct.name}</h3>
                <p className="text-xs text-slate-500">{quickViewProduct.unit}</p>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <FaStar />
                  <span>{quickViewProduct.rating} ({quickViewProduct.reviews} verified reviews)</span>
                </div>
                <div className="text-xl font-extrabold text-emerald-700 pt-1">
                  ${quickViewProduct.price.toFixed(2)}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed border-t pt-3">
              Directly harvested from local organic certified farms. Handpicked under cold storage conditions to guarantee maximum flavor and nutrition.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  handleAddToCart(quickViewProduct.id);
                  setQuickViewProduct(null);
                }}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <FaShoppingBag />
                <span>Add Item to Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
