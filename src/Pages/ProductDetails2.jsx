import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../data/products";

export default function ProductDetails2() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    let foundProduct = null;
    let foundCategory = null;

    for (const cat of categories) {
      const found = cat.products.find(
        (p) => p.id === productId || p.productId === productId || p.productid === productId
      );
      if (found) {
        foundProduct = found;
        foundCategory = cat;
        break;
      }
    }

    setProduct(foundProduct);
    setCategory(foundCategory);
  }, [productId]);
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [productId]);

  if (!product || !category)
    return (
      <div className="p-6 text-center text-red-500 font-semibold text-lg">
        Product Not Found
      </div>
    );

  const relatedProducts = category.products.filter(
    (p) => (p.id || p.productId || p.productid) !== (product.id || product.productId || product.productid)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 pb-20">
      <div className="max-w-6xl mx-auto p-6">
        {/* Back Button */}
        <Link
          to={`/product/${category.products[0]?.id || category.products[0]?.productId || category.products[0]?.productid}`}
          className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
        >
          &larr; Back to {category.name}
        </Link>

        {/* Product Info */}
        <div className="grid md:grid-cols-2 gap-10 mt-6 items-center">
          <div className="flex justify-center">
            <div className="p-4 rounded-3xl bg-gradient-to-br from-purple-100 via-pink-50 to-red-50 shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-2xl shadow-lg max-h-[450px] object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Category:</span> {category.name}
            </p>
            <p className="text-2xl font-bold text-purple-600 mb-2">{product.price}</p>
            <p
              className={`mb-4 font-medium text-lg ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            <button className="px-8 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
              Send Inquiry
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-700">About This Product</h2>
          <p className="text-gray-700 mb-6">{product.about}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {product.aboutHighlights?.map((h, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{h.title}</h3>
                <p className="text-gray-600 text-sm">{h.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 bg-white p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-600">Product Specifications</h2>
          <div className="overflow-x-auto border rounded-xl">
            <table className="w-full border-collapse text-left">
              <tbody>
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <tr key={key} className="border-b last:border-b-0 even:bg-gray-50 hover:bg-purple-50 transition">
                    <td className="px-4 py-3 font-medium text-gray-700 w-1/3">{key}</td>
                    <td className="px-4 py-3 text-gray-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Features */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3 text-purple-600">Features</h2>
            <p className="text-gray-700">{product.features}</p>
          </div>
        </div>

        {/* You Might Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-purple-700">You Might Also Like</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id || p.productId || p.productid}
                  to={`/product-details2/${p.id || p.productId || p.productid}`}
                  className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center text-center border-t-4 border-purple-500"
                >
                  <div className="h-40 w-full flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 hover:text-purple-600 transition">
                    {p.name}
                  </h3>
                  <p className="text-purple-600 font-bold mb-1">{p.price}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      p.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {p.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                  <div className="mt-3 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center text-gray-400 text-sm">
          Discover more amazing products in {category.name} 🌟
        </div>
      </div>
    </div>
  );
}
