"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Home,
  Palette,
  Package,
  Briefcase,
  Users,
  Calendar,
  DollarSign,
  CalendarDays,
  CreditCard,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 mb-6">
            About <span className="text-primary">Indian Paints</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We, Indian Paints were inaugurated in the year 2015, since then we have been offering a cost-effective range of paints and enamels. These are used to provide finishing to the commercial as well as industrial products. Our wide range of products comprises of Water Based Enamels, Hi-Gloss Water Based Enamels and various kinds of Enamel Paints. These offered products find their application in protecting the products such as household appliances, Furniture & Wood, Automotive Machines and many more. Apart from these, we also make paints and enamels that are lead-free and isocyanate free to protect the surroundings and to promote a safer working condition. We present a wide range of products in specific color, quality and required quantity. With the range of quality product, we are able to achieve a remarkable position in a very short span of time. Hence, we are gradually increasing our prominence in the market as a prominent Manufacturer and Supplier.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Briefcase className="h-8 w-8 text-white" />,
              title: "Business Type",
              desc: "Exporter, Importer, Manufacturer",
              bg: "from-yellow-500 to-orange-500",
            },
            {
              icon: <Users className="h-8 w-8 text-white" />,
              title: "Employee Count",
              desc: "550+ Employees",
              bg: "from-green-500 to-emerald-500",
            },
            {
              icon: <Calendar className="h-8 w-8 text-white" />,
              title: "Establishment",
              desc: "2015",
              bg: "from-blue-500 to-indigo-500",
            },
            {
              icon: <DollarSign className="h-8 w-8 text-white" />,
              title: "Annual Turnover",
              desc: "Rs 10 Crores",
              bg: "from-purple-500 to-pink-500",
            },
            {
              icon: <CalendarDays className="h-8 w-8 text-white" />,
              title: "Working Days",
              desc: "Monday - Saturday",
              bg: "from-red-500 to-yellow-500",
            },
            {
              icon: <CreditCard className="h-8 w-8 text-white" />,
              title: "Payment Mode",
              desc: "Cheque",
              bg: "from-teal-500 to-cyan-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl shadow-2xl bg-white/60 backdrop-blur-lg border border-gray-100 hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <CardHeader className="flex flex-col items-center gap-4">
                  <div className={`p-4 rounded-full bg-gradient-to-tr ${item.bg} shadow-lg`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 text-center">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
