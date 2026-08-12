import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { 
  FaAppleAlt, 
  FaCheese, 
  FaBreadSlice, 
  FaWineBottle, 
  FaDrumstickBite, 
  FaLeaf, 
  FaCookieBite, 
  FaIceCream,
  FaArrowRight,
  FaSearch
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ALL_CATEGORIES = [
  {
    id: 'cat-1',
    name: 'Fruits & Farm Vegetables',
    itemCount: '140+ Products',
    icon: <FaAppleAlt className="text-emerald-500 text-3xl" />,
    borderColor: 'border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400',
    description: 'Crisp apples, organic leafy greens, farm fresh berries, avocados, and seasonal root veggies.',
    subcategories: ['Fresh Fruits', 'Organic Vegetables', 'Exotic Berries', 'Herbs & Seasonings']
  },
  {
    id: 'cat-2',
    name: 'Dairy, Cheese & Eggs',
    itemCount: '85+ Products',
    icon: <FaCheese className="text-amber-500 text-3xl" />,
    borderColor: 'border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-800',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400',
    description: 'Whole pasture milk, Greek yogurt, artisanal cheeses, butter, and grade-A free range eggs.',
    subcategories: ['Pure Milk', 'Artisanal Cheese', 'Yogurt & Butter', 'Free Range Eggs']
  },
  {
    id: 'cat-3',
    name: 'Artisanal Bakery & Bread',
    itemCount: '60+ Products',
    icon: <FaBreadSlice className="text-orange-500 text-3xl" />,
    borderColor: 'border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-800',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400',
    description: 'Freshly baked sourdough, whole wheat loaves, butter croissants, and gluten-free breads.',
    subcategories: ['Sourdough & Loaves', 'Buns & Rolls', 'Pastries & Muffins', 'Gluten Free']
  },
  {
    id: 'cat-4',
    name: 'Cold Drinks & Fresh Juices',
    itemCount: '110+ Products',
    icon: <FaWineBottle className="text-blue-500 text-3xl" />,
    borderColor: 'border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-800',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400',
    description: 'Cold-pressed fruit juices, sparkling mineral waters, kombucha, iced teas, and organic milks.',
    subcategories: ['Cold Pressed Juices', 'Sparkling Waters', 'Energy Drinks', 'Iced Teas & Coffee']
  },
  {
    id: 'cat-5',
    name: 'Organic Meat & Seafood',
    itemCount: '45+ Products',
    icon: <FaDrumstickBite className="text-rose-500 text-3xl" />,
    borderColor: 'border-rose-200',
    badgeColor: 'bg-rose-100 text-rose-800',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=400',
    description: 'Grass-fed beef cuts, organic chicken breast, fresh salmon fillets, and wild caught shrimp.',
    subcategories: ['Poultry & Chicken', 'Grass-fed Beef', 'Fresh Fish Fillets', 'Seafood & Shellfish']
  },
  {
    id: 'cat-6',
    name: 'Snacks & Organic Munchies',
    itemCount: '95+ Products',
    icon: <FaCookieBite className="text-yellow-600 text-3xl" />,
    borderColor: 'border-yellow-200',
    badgeColor: 'bg-yellow-100 text-yellow-800',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400',
    description: 'Roasted almond mixes, organic dried fruits, sea salt potato chips, dark chocolate, and granola bars.',
    subcategories: ['Nuts & Dried Fruits', 'Chips & Crackers', 'Granola & Protein Bars', 'Chocolates']
  },
  {
    id: 'cat-7',
    name: 'Frozen Foods & Desserts',
    itemCount: '70+ Products',
    icon: <FaIceCream className="text-purple-500 text-3xl" />,
    borderColor: 'border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-800',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=400',
    description: 'Gourmet gelato, frozen berries, ready-to-bake woodfired pizzas, and organic smoothie packs.',
    subcategories: ['Ice Cream & Gelato', 'Frozen Vegetables', 'Ready Meals & Pizza', 'Smoothie Packs']
  },
  {
    id: 'cat-8',
    name: 'Pantry Staples & Grains',
    itemCount: '130+ Products',
    icon: <FaLeaf className="text-teal-500 text-3xl" />,
    borderColor: 'border-teal-200',
    badgeColor: 'bg-teal-100 text-teal-800',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400',
    description: 'Basmati rice, extra virgin olive oil, quinoa, organic pasta, spices, and whole grain flours.',
    subcategories: ['Rice & Grains', 'Cooking Oils', 'Pasta & Sauces', 'Spices & Condiments']
  }
];

export default function CategoriesPage() {
  const [search, setSearch] = useState('');

  const filteredCategories = ALL_CATEGORIES.filter(cat => {
    return cat.name.toLowerCase().includes(search.toLowerCase()) || 
           cat.description.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Organized Store Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Grocery Categories</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            From farm-fresh organic produce to artisanal bakery and gourmet cold beverages, discover everything you need.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative pt-4">
            <input
              type="text"
              placeholder="Search category name or items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white text-slate-800 text-sm pl-11 pr-4 py-3.5 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300 transition"
            />
            <FaSearch className="absolute left-4 top-8 text-slate-400 text-base" />
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Store Departments</h2>
            <p className="text-xs text-slate-500 mt-1">Select a category to view featured products and subcategories.</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            {filteredCategories.length} Categories Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className={`bg-white border ${cat.borderColor} rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group`}
            >
              {/* Image Header */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <span className={`absolute top-3 right-3 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-xs ${cat.badgeColor}`}>
                  {cat.itemCount}
                </span>

                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                  <div className="p-2 rounded-xl bg-white/90 backdrop-blur-md shadow-md">
                    {cat.icon}
                  </div>
                  <h3 className="font-extrabold text-base text-white tracking-tight drop-shadow-md">{cat.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.description}
                </p>

                {/* Subcategory Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.subcategories.map((sub, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2.5 py-1 rounded-md">
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-2 border-t border-slate-100">
                  <NavLink
                    to="/products"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all group-hover:gap-3"
                  >
                    <span>Browse Category Items</span>
                    <FaArrowRight size={12} />
                  </NavLink>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
