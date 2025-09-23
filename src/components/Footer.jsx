"use client";

import {
  MapPin,
  User,
  Star,
  Globe,
  Heart,
} from "lucide-react";
import IndianPaintsLogo from "../assets/IndianPaintsLogo1.png"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-100 via-white to-purple-100 border-t border-gray-200 mt-20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        {/* Left Section - Seller Details */}
        <div className="bg-white/70 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl p-8 space-y-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Seller Details</h3>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Rating</p>
              <p className="text-gray-600">4 / 5</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Director</p>
              <p className="text-gray-600">Mr Nizamuddin Ansari</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Address</p>
              <p className="text-gray-600">
                RZA-338, Nihal Vihar, Nangloi,<br />
                New Delhi, Delhi, 110041, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Exporters In</p>
              <p className="text-gray-600">New Delhi</p>
            </div>
          </div>
        </div>

        {/* Right Section - Company Info */}
        <div className="flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-3xl p-10 max-w-md mx-auto">
  <div className="flex justify-center mb-6">
    <img
      src={IndianPaintsLogo}
      alt="Indian Paints Logo"
      // className="h-36 w-36 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
  </div>

  <p className="text-gray-700 text-lg font-medium mb-4 leading-relaxed">
    Providing premium paint solutions across India since <span className="font-bold text-purple-600">2015</span>.
  </p>

  <p className="text-gray-500 text-sm mb-2">
    &copy; {new Date().getFullYear()} Indian Paints. All rights reserved.
  </p>

  <p className="text-gray-500 text-sm mt-4 flex items-center justify-center gap-2 font-semibold">
    Made with <Heart className="h-5 w-5 text-red-500" /> in India.
  </p>
        </div>
      </div>
    </footer>
  );
}
