"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/Button"
import { Phone, Info, Network as NetworkIcon } from "lucide-react"

export default function SectionNetwork() {
  return (
    <section id="network" className="py-24 bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 mb-4">
            Our Network
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Extensive distribution network ensuring our products reach every corner of India.
          </p>
        </div>

        {/* Network Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "4500+", label: "Exclusive Stores", icon: <NetworkIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" /> },
            { value: "28000+", label: "Dealer Network", icon: <Info className="h-8 w-8 text-purple-500 mx-auto mb-2" /> },
            { value: "450+", label: "Cities Covered", icon: <Phone className="h-8 w-8 text-purple-500 mx-auto mb-2" /> },
            { value: "24/7", label: "Customer Support", icon: <NetworkIcon className="h-8 w-8 text-purple-500 mx-auto mb-2" /> },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              {stat.icon}
              <div className="text-4xl font-extrabold text-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Store Locator Card */}
        <div className="mt-20">
          <Card className="rounded-3xl shadow-2xl border-0 bg-white p-8">
            <CardHeader>
              <CardTitle className="text-center text-2xl md:text-3xl font-bold text-purple-600">
                Find a Store Near You
              </CardTitle>
              <CardDescription className="text-center text-gray-500">
                Locate our authorized dealers and exclusive showrooms in your area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your city or pincode"
                  className="flex-1 rounded-xl border-purple-300 focus:ring-purple-500 focus:border-purple-500"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition transform hover:scale-105">
                  Search Stores
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
