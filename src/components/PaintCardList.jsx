import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/products";

const CategoryCardList = () => {
  return (
    <div className="px-4 py-12 bg-gradient-to-b from-purple-50 via-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Explore Our Categories
        </h2>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
          Browse through our diverse range of product categories and find what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/product/${cat.products[0]?.id || cat.products[0]?.productId || cat.products[0]?.productid}`} // Link to first product in category
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-72 flex flex-col items-center text-center p-6"
          >
            {/* Category Image or Icon Placeholder */}
            <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-tr from-purple-200 via-pink-200 to-red-200 flex items-center justify-center text-2xl font-bold text-white shadow-md">
              {cat.name.charAt(0)}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">{cat.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{cat.description}</p>

            <p className="mt-auto px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all font-medium">
              Explore Products
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCardList;

