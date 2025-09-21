"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";



export default function Products() {
  return (
    
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of paints for every need - from interior to exterior, decorative to protective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Interior Paints</CardTitle>
              <CardDescription>Premium emulsions for beautiful interiors</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Washable & Durable</li>
                <li>• Low VOC Formula</li>
                <li>• 1000+ Color Options</li>
                <li>• Easy Application</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Exterior Paints</CardTitle>
              <CardDescription>Weather-resistant exterior solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• UV Protection</li>
                <li>• Monsoon Ready</li>
                <li>• Crack Resistance</li>
                <li>• Long Lasting</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Wood Finishes</CardTitle>
              <CardDescription>Enhance and protect wooden surfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Natural Wood Look</li>
                <li>• Termite Protection</li>
                <li>• Water Resistant</li>
                <li>• Easy Maintenance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Specialty Coatings</CardTitle>
              <CardDescription>Advanced solutions for specific needs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Anti-Bacterial</li>
                <li>• Heat Reflective</li>
                <li>• Texture Finishes</li>
                <li>• Industrial Grade</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
