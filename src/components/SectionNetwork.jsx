"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/Button"
import { Phone, Info, Network as NetworkIcon } from "lucide-react";
<NetworkIcon className="h-5 w-5 text-primary" />


export default function SectionNetwork() {
  return (
    <section id="network" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Network</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Extensive distribution network ensuring our products reach every corner of India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Exclusive Stores</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">2000+</div>
            <div className="text-muted-foreground">Dealer Network</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Cities Covered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
          </div>
        </div>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Find a Store Near You</CardTitle>
              <CardDescription className="text-center">
                Locate our authorized dealers and exclusive showrooms in your area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your city or pincode" className="flex-1" />
                <Button>Search Stores</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
