"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function SectionHome({ scrollToSection }) {
  return (
    <section
      id="home"
      className="pt-16 h-[70vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100 opacity-50"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Floating blurred circles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-10 left-10"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 bottom-20 right-20"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transform Your Space with{" "}
          <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent font-bold">
  Indian Paints
</span>

        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Discover premium quality paints that bring life to your walls. From vibrant
          colors to lasting protection, we've been India's trusted paint partner for
          decades.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("products")}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white shadow-xl hover:scale-105 hover:shadow-purple-400/40 transition-all duration-300"
          >
            Explore Products
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Quote
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
