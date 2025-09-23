import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../data/products";

export default function ProductDetails1() {
  const { productId } = useParams(); 
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const foundCategory = categories.find((cat) =>
      cat.products.some(
        (p) =>
          p.productId === productId ||
          p.productid === productId ||
          p.id === productId
      )
    );
    setCategory(foundCategory || null);
  }, [productId]);

  if (!category)
    return (
      <div className="p-6 text-center text-red-500 font-semibold text-lg">
        Product Not Found
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Back link */}
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 transition-colors mb-6 inline-block font-medium"
        >
          &larr; Back to Home
        </Link>

        {/* Category header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold mb-3 text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {category.name}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{category.description}</p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {category.products.map((p) => (
            <Link
              key={p.id || p.productId || p.productid}
              to={`/product-details2/${p.id || p.productId || p.productid}`}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition transform hover:scale-[1.03] duration-300 p-5 flex flex-col items-center text-center border border-purple-100 hover:border-purple-300"
              style={{
                boxShadow: "0 10px 30px rgba(128, 90, 213, 0.1)",
              }}
            >
              {/* Product Image */}
              <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 shadow-inner">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <h3 className="font-semibold text-lg text-gray-800 mb-1 hover:text-purple-600 transition-colors">
                {p.name}
              </h3>
              <p className="text-xl font-bold text-purple-500 mb-2">{p.price}</p>

              {/* Stock status */}
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  p.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {p.inStock ? "In Stock" : "Out of Stock"}
              </span>

              {/* Animated hover bar */}
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Footer decoration */}
        <div className="mt-20 text-center text-gray-400 text-sm">
          Browse more amazing products in this category 🌟
        </div>
      </div>
    </div>
  );
}
